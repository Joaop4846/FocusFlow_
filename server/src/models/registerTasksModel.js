// taskModel.js
const sqlUtils = require("../utils/sqlServer"); // Utilitário para executar queries

function validateAndConvertValue(value) {
  if (value === undefined || value === null) {
    throw new Error("Valor inválido");
  }
  return value;
}

function createTask(task) {
  const ID_USER = validateAndConvertValue(task.ID_USER);
  const NOME_TAREFA = validateAndConvertValue(task.NOME_TAREFA);
  const DESCRICAO_TAREFA = validateAndConvertValue(task.DESCRICAO_TAREFA);
  const DATA_TAREFA = validateAndConvertValue(task.DATA_TAREFA);
  const PRIORIDADE = validateAndConvertValue(task.PRIORIDADE);
  const CONCLUSAO = task.CONCLUSAO; // Valor fixo: 0

  // Query SQL corrigida
  const sqlQuery = `
    INSERT INTO JoaoLists 
      (ID_USER, NOME_TAREFA, DESCRICAO_TAREFA, DATA_TAREFA, PRIORIDADE, CONCLUSAO)
    VALUES 
      (${ID_USER}, N'${NOME_TAREFA}', N'${DESCRICAO_TAREFA}', '${DATA_TAREFA}', N'${PRIORIDADE}', ${CONCLUSAO})
  `;

  return sqlUtils.dispatchQuery(sqlQuery);
}

module.exports = {
  createTask
};