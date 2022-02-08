const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/courses.controller');



router.get('/', (req, res, next) => {
  res.render('index')
})

//display courses
router.get('/courses', coursesController.list)

// display details
router.get('/courses/:id', coursesController.get)



module.exports = router;