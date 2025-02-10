const sqlUtils = require('../utils/sqlServer.js');

// Busca as tarefas do usuário que ainda não foram concluídas
function findUserCompletedLists(id) {
  const sql = `
    SELECT *
    FROM dbo.JoaoLists
    WHERE ID_USER = '${id}' AND CONCLUSAO = 1
  `;
  return sqlUtils.dispatchQuery(sql);
}

module.exports = {
    findUserCompletedLists
}