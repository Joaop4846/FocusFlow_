const express = require('express');
const router = express.Router();
const ListCompletedTasks = require('../controller/completedTasksController');
const authenticateToken = require('../middleware/authMiddleware');

 
 
router.get('/listCompletedTasks', authenticateToken,ListCompletedTasks.getUserListsCompleted);


module.exports = router;
