const express = require('express');
const router = express.Router();
const ListTasksController = require('../controller/listTasksController');
const authenticateToken = require('../middleware/authMiddleware');

 
 
router.get('/listTasks', authenticateToken,ListTasksController.getUserLists);

router.put('/concludeTask', authenticateToken,ListTasksController.concludeTask);

router.delete('/deleteTask', authenticateToken,ListTasksController.deleteTask);

 
 
 
module.exports = router;
 