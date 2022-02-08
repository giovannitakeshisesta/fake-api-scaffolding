const httpClient = require('./base.service');

const getCourses = () => httpClient.get('/courses');
module.exports = {
  getCourses,
}
