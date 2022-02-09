const httpClient = require('./base.service');

const getCourses = () => httpClient.get('/courses');

const getOneCourse = (courseId) => httpClient.get(`/courses/${courseId}`);

const createCourse = (data) => httpClient.post('/courses', data)

const deleteCourse = (courseId) => httpClient.delete(`/courses/${courseId}`)

const editCourse = (courseId,data) => httpClient.put(`/courses/${courseId}`,data)


//editCourse


module.exports = {
    getCourses,
    getOneCourse,
    createCourse,
    deleteCourse,
    editCourse
}

