const taskModel = require('../models/registerTasksModel');

const createTask = async (req, res) => {
  try {
    const userId = req.userId;
    const { nome_tarefa, descricao_tarefa, data_tarefa, prioridade } = req.body;

    // Validação dos dados recebidos
    if (!nome_tarefa || !descricao_tarefa || !data_tarefa || !prioridade) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const newTask = {
      ID_USER: userId,
      NOME_TAREFA: nome_tarefa,
      DESCRICAO_TAREFA: descricao_tarefa,
      DATA_TAREFA: data_tarefa,
      PRIORIDADE: prioridade,
      CONCLUSAO: 0
    };
    console.log('Dados do front:', newTask)

    const result = await taskModel.createTask(newTask);
    
    res.status(201).json({
      message: "Tarefa criada com sucesso",
      task: result
    });

  } catch (err) {
    console.error("Erro ao criar tarefa:", err);
    res.status(500).json({ message: "Erro ao criar tarefa" });
  }
};

module.exports = {
  createTask
};