const sqlUtils = require('../utils/sqlServer.js');

// Busca as tarefas do usuário que ainda não foram concluídas
function findUserUncompletedLists(id) {
  const sql = `
    SELECT *
    FROM dbo.JoaoLists
    WHERE ID_USER = '${id}' AND CONCLUSAO = 0
  `;
  return sqlUtils.dispatchQuery(sql);
}

// Busca o nome do usuário (para outros usos)
function findUser(id) {
  const sql = `
    SELECT NOME
    FROM dbo.JoaoUsers
    WHERE ID_USER = '${id}'
  `;
  return sqlUtils.dispatchQuery(sql);
}

// Atualiza a coluna CONCLUSAO para 1, concluindo a tarefa
function concludeTask(id) {
  const sql = `
    UPDATE dbo.JoaoLists
    SET CONCLUSAO = 1
    WHERE ID_TAREFA = '${id}'
  `;
  return sqlUtils.dispatchQuery(sql);
}

// Exclui permanentemente a tarefa da tabela
function deleteTask(id) {
  const sql = `
    DELETE FROM dbo.JoaoLists
    WHERE ID_TAREFA = '${id}'
  `;
  return sqlUtils.dispatchQuery(sql);
}

module.exports = {
  findUserUncompletedLists,
  findUser,
  concludeTask,
  deleteTask
};