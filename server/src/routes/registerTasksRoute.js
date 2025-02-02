const express = require('express');
const router = express.Router();
const RegisterTasksController = require('../controller/registerTasksController');
const authenticateToken = require('../middleware/authMiddleware');

 
 
router.post('/tasks', authenticateToken,RegisterTasksController.createTask);
 
 
 
module.exports = router;
 