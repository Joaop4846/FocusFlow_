const express = require('express');
const app = express.Router();
 
const registerRoutes = require('./registerRoute.js') // Importe o arquivo de rotas de registre
app.use('/', registerRoutes) 

const loginRoutes = require('./loginRoute.js') // Importe o arquivo de rotas de login
app.use('/', loginRoutes) 

const RegisterTasksRoutes = require('./registerTasksRoute.js') // Importe o arquivo de rotas de register tasks
app.use('/', RegisterTasksRoutes)

const ListTasksRoutes = require('./listTasksRoute.js') // Importe o arquivo de rotas de Lists tasks
app.use('/', ListTasksRoutes) 

const ListCompletedTasks = require('./completedTasksRoute.js') // Importe o arquivo de rotas de Lists tasks
app.use('/', ListCompletedTasks) 
 


module.exports = app;