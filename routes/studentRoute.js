const express = require('express')
const { getAllStudents, getSingleStudents, updateStudents, deleteStudents, createStudents} = require('../controllers/studentController')
const router = express.Router()

router.route('/students').get(getAllStudents).post(createStudents)

router.route('/students/:id').get(getSingleStudents).put(updateStudents).delete(deleteStudents)


module.exports = router
