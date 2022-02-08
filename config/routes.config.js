const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/courses.controller');



router.get('/', (req, res, next) => {
  res.render('index')
})

//display courses
router.get('/courses', coursesController.list)

// create new course
router.get('/courses/new', coursesController.create)
router.post('/courses', coursesController.doCreate)

// display details
router.get('/courses/:id', coursesController.get)

// delete  course
router.post('/courses/:id/delete', coursesController.delete)


module.exports = router;