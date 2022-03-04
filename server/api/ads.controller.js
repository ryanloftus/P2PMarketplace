import AdsDao from "../dao/ads-dao.js";

export default class AdsController {
    static async apiGetAds(req, res) {
        const adsPerPage = req.body.adsPerPage ? parseInt(req.body.adsPerPage) : 20;
        const page = req.body.page ? parseInt(req.body.page) : 0;
        const filters = req.body ? req.body : {};
        const { adsList, numResults } = await AdsDao.getAds({ filters: filters, page: page, adsPerPage: adsPerPage });

        res.json({
            adsList: adsList,
            page: page,
            filters: filters,
            adsPerPage: adsPerPage,
            numResults: numResults,
        });
    }

    static async apiPostAd(req, res) {
        // TODO
    }

    static async apiUpdateAd(req, res) {
        // TODO
    }

    static async apiDeleteAd(req, res) {
        const id = req.body.id;
        const wasDeleteSuccess = await AdsDao.deleteAd(id);

        res.json({
            id: id,
            successful: wasDeleteSuccess,
        });
    }
}
