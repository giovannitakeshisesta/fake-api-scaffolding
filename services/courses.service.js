const httpClient = require('./base.service');

const getCourses = () => httpClient.get('/courses');

const getOneCourse = (courseId) => httpClient.get(`/courses/${courseId}`);

const createCourse = (data) => httpClient.post('/courses', data)


module.exports = {
    getCourses,
    getOneCourse,
    createCourse
}

