const express = require('express');
const router = express.Router();
const RegisterController = require('../controller/registerController');
 
 
router.post('/register', RegisterController.registerUser);
 
 
 
module.exports = router;
 