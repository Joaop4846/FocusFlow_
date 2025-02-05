const ListsModel = require('../models/listTasksModel');

// Lista apenas as tarefas não concluídas
const getUserLists = async (req, res) => {
  try {
    const userId = req.userId;
    // Busca as tarefas onde CONCLUSAO é 0
    const userListsData = await ListsModel.findUserUncompletedLists(userId);
    // console.log('Dados a serem enviados:', userListsData);
    res.status(200).json(userListsData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar as listas' });
  }
};

// Endpoint para concluir tarefa (UPDATE da coluna CONCLUSAO para 1)
const concludeTask = async (req, res) => {
  try {
    const { id } = req.body;
    
    // Chama a função que executa o UPDATE na tabela JoaoLists
    await ListsModel.concludeTask(id);
    res.status(200).json({ message: "Tarefa concluída com sucesso." });
  } catch (err) {
    console.error("Erro na conclusão da tarefa:", err);
    res.status(500).json({ error: "Erro ao concluir a tarefa." });
  }
};

// Endpoint para excluir uma tarefa
const deleteTask = async (req, res) => {
  try {
    const { id } = req.body;
    // Chama a função que executa o DELETE na tabela JoaoLists
    await ListsModel.deleteTask(id);
    res.status(200).json({ message: "Tarefa excluída com sucesso." });
  } catch (err) {
    console.error("Erro na exclusão de tarefa:", err);
    res.status(500).json({ error: "Erro ao excluir a tarefa." });
  }
};

module.exports = { getUserLists, concludeTask, deleteTask };