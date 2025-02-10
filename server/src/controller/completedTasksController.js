const ListsModelCompleted = require('../models/completedTasksModel');

// Lista apenas as tarefas não concluídas
const getUserListsCompleted = async (req, res) => {
  try {
    const userId = req.userId;
    // Busca as tarefas onde CONCLUSAO é 0
    const userListsData = await ListsModelCompleted.findUserCompletedLists(userId);
    // console.log('Dados a serem enviados:', userListsData);
    res.status(200).json(userListsData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar as listas' });
  }

}

module.exports = { 
    getUserListsCompleted
};