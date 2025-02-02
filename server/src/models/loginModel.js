const sql = require('mssql');
const dbConfig = require('../config/dbConfig');

async function getUserByEmail(userEmail) {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('userEmail', sql.VarChar, userEmail)
      .query("SELECT ID_USER, NOME, EMAIL, SENHA FROM dbo.JoaoUsers WHERE EMAIL = @userEmail");

    if (result.recordset.length === 0) {
      return false; // Usuário não encontrado
    }
    
    const user = result.recordset[0];
    return user;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = {
  getUserByEmail
};