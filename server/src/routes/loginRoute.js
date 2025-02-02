const express = require('express');
const router = express.Router();
const LoginController = require('../controller/loginController');
 
 
router.post('/login', LoginController.login);
 
 
 
module.exports = router;
 