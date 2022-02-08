const coursesService = require('../services/courses.service');

// display courses
module.exports.list = (req, res, next) => {
    coursesService.getCourses()
      .then(response => {
        //console.log(response.data)
        res.render('courses', { courses: response.data })
      })
      .catch(err => next(err))
  }


  // display details
  module.exports.get = (req, res, next) => {
    coursesService.getCourses(req.params.id)
      .then(response => {
        //console.log(response.data)
        res.render('courseDetail', { course: response.data[req.params.id] })
      })
      .catch(err => next(err))
  }