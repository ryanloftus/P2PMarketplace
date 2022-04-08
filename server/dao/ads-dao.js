let ads;

export default class AdsDao {
    static async injectDB(connection) {
        if (ads) return;
        try {
            ads = await connection.db(process.env.DB_NAME).collection('ads');
        } catch (err) {
            console.error(`Unable to connect to ads collection. ${err}`)
        }
    }

    static async getAds({ filters = {}, page = 0, adsPerPage = 20 }) {
        // TODO: add sort functionality
        let query = {};
        if (filters) {
            if (filters.priceMin && filters.priceMax)
                query.price = { $gte: filters.priceMin, $lte: filters.priceMax };
            if (filters.category && filters.category != 'any') 
                query.category = { $eq: filters.category };
            if (filters.user)
                query.user = { $eq: filters.user };
        }

        try {
            const adsList = await ads.find(query).skip(adsPerPage * page).limit(adsPerPage).toArray();
            const numResults = await ads.countDocuments(query);
            return { adsList: adsList, numResults: numResults };
        } catch (err) {
            console.error(`Unable to issue query. ${err}`);
            return { adsList: [], numResults: 0};
        }
    }

    static async postAd(adData) {
        try {
            await ads.insertOne(adData);
            return true;
        } catch (err) {
            console.error(`Unable to post ad. ${err}`);
            return false;
        }
    }

    static async updateAd(id, adData) {
        try {
            await ads.replaceOne({ _id: id }, adData);
            return true;
        } catch (err) {
            console.error(`Unable to update ad. ${err}`);
            return false;
        }
    }

    static async deleteAd(id) {
        if (!id) return false;
        try {
            await ads.remove({ _id: id }, { justOne: true });
            return true;
        } catch (err) {
            console.error(`Unable to issue delete. ${err}`);
            return false;
        }
    }
}
