const apiAdapter = require('../../ApiAdaptor');
const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async(req, res) => {
    try {
        const id = req.params.id;
        const imageCourse = await api.delete(`/api/image-courses/${id}`);
        return res.json(imageCourse.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'Oops..... service unavailable' });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}