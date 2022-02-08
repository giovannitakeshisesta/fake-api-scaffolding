const coursesService = require('../services/courses.service');

// display courses - getCourses
module.exports.list = (req, res, next) => {
    coursesService.getCourses()
      .then(response => {
        //console.log(response.data)
        res.render('courses', { courses: response.data })
      })
      .catch(err => next(err))
  }


  // display details -getOneCourse
  module.exports.get = (req, res, next) => {
    coursesService.getOneCourse(req.params.id)
      .then(response => {
        res.render('courseDetail', { course: response.data })
      })
      .catch(err => next(err))
  }


  // create new course:
  // display form
  module.exports.create = (req, res, next) => {
    res.render('newCourse')
  }

  // POST ROUTE - createCourse
  module.exports.doCreate = (req, res, next) => {
    coursesService.createCourse(req.body)
      .then((response) => {
        res.redirect(`/courses/${response.data.id}`)
      })
      .catch(err => next(err))
  }