const sqlUtils = require('../utils/sqlServer');

function insertUser(nome, email, senha) {
  const sql = `
    INSERT INTO dbo.JoaoUsers (NOME, EMAIL, SENHA)
    VALUES ('${nome}', '${email}', '${senha}');
  `;
  return sqlUtils.dispatchQuery(sql);
}

module.exports = { insertUser };