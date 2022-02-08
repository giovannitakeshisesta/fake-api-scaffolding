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

  // Post route- createCourse
  module.exports.doCreate = (req, res, next) => {
    coursesService.createCourse(req.body)
      .then((response) => {
        res.redirect(`/courses/${response.data.id}`)
      })
      .catch(err => next(err))
  }


  // delete  course  -deleteCourse
  // this method  refresh the page every time and send a query to the db
  module.exports.delete = (req, res, next) => {
    coursesService.deleteCourse(req.params.id)
    .then((response) => {
      res.redirect('/courses')
    })
    .catch(err => next(err))
  }

  // this other way  
  // 1)remove the element from the db 
  // 2)remove the element from the dome
  module.exports.deleteClient = (req, res, next) => {
    console.log("peinate")
    coursesService.deleteCourse(req.params.id)
      .then((response) => {
        res.status(200).json({})
      })
      .catch(err => next(err))
  }