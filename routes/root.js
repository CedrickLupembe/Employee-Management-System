const express = require('express')
const {CreateOne, GetAll, GetOne, UpdateOne, DeleteOne} = require('../controllers/controller')

const router = express.Router()


// Create Employee
router.post('/', CreateOne)

// Get all Employees
router.get('/', GetAll)

// Get one Employee
router.get('/:id', GetOne)

// Update Employee
router.put('/:id', UpdateOne)

// Delete one Employee
router.delete('/:id', DeleteOne)



module.exports = router