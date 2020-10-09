const apiAdapter = require('../../ApiAdaptor');
const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async(req, res) => {
        try {
            const userId = req.user.data.id;

            const review = await api.post('/api/reviews', {
                user_id: userId,
                ...req.body
            });
            return res.json(review.data);
        } catch (error) {
            console.log(error)

            if (error.code === 'ECONNREFUSED') {
                return res.status(500).json({ status: 'error', message: 'Oops.....  service unavailable' });
            }

            const { status, data } = error.response;
            return res.status(status).json(data);
        }
    }
    // #API REVIEW BAY TEGAR SATYA NEGARA BACKEND DEVELOPER