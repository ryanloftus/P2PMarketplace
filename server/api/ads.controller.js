import AdsDao from '../dao/ads-dao.js';

export default class AdsController {
    static async apiGetAds(req, res) {
        const params = req.query ?? {};

        const adsPerPage = params.adsPerPage ? parseInt(params.adsPerPage) : 20;
        const page = params.page ? parseInt(params.page) : 0;
        const filters = req.query ?? {};
        const { adsList, numResults } = await AdsDao.getAds({ filters: filters, page: page, adsPerPage: adsPerPage });

        res.json({
            ads: adsList,
            page: page,
            adsPerPage: adsPerPage,
            numResults: numResults,
        });
    }

    static async apiPostAd(req, res) {
        const wasPostSuccess = await AdsDao.postAd(req.body);
        res.json({ successful: wasPostSuccess });
    }

    static async apiUpdateAd(req, res) {
        const id = req.body.id;
        delete req.body.id;
        const wasUpdateSuccess = await AdsDao.updateAd(id, req.body);

        res.json({ successful: wasUpdateSuccess });
    }

    static async apiDeleteAd(req, res) {
        const id = req.body.id;
        const wasDeleteSuccess = await AdsDao.deleteAd(id);

        res.json({ successful: wasDeleteSuccess });
    }
}
