let ads;

export default class AdsDao {
    static async injectDB(connection) {
        if (ads) return;
        try {
            ads = await connection.db(process.env.ADS_NS).collection('ads');
        } catch (err) {
            console.error(`Unable to connect to ads collection. ${err}`)
        }
    }

    static async getAds({ filters = null, page = 0, adsPerPage = 20 }) {
        // TODO: add sort functionality
        let query = {};
        if (filters) {
            if (filters.priceMin && filters.priceMax)
                query.price = { $gte: filters.priceMin, $lte: filters.priceMax };
            if (filters?.category && filters.category != 'any') 
                query.category = { $eq: filters.category };
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
}
