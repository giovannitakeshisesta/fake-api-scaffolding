const coursesService = require('../services/courses.service');

module.exports.list = (req, res, next) => {
    coursesService.getCourses()
      .then(response => {
        console.log(response.data)
        res.render('courses', { courses: response.data })
      })
      .catch(err => next(err))
  }