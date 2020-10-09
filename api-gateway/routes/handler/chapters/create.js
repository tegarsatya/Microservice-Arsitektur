const apiAdapter = require('../../ApiAdaptor');
const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async(req, res) => {
    try {
        const chapter = await api.post('/api/chapters', req.body);
        return res.json(chapter.data);
    } catch (error) {

        console.log(error)

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'Oops..... service unavailable' });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}