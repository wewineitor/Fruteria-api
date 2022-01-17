const express = require('express')
const router = express.Router()
const LoginController = require('../controllers/LoginController')
const controller = new LoginController();

router.post('/register', controller.createUser)
router.post('/login', controller.loguear)

module.exports = router