const bcrypt = require('bcryptjs');
const registerModel = require('../models/registerModel.js');

const registerUser = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(senha, saltRounds);

    await registerModel.insertUser(nome, email, hashedPassword);

    res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
  } catch (err) {
    console.error("Erro ao cadastrar usuário:", err);
    res.status(500).json({ error: 'Erro ao cadastrar o usuário.' });
  }
};

module.exports = { registerUser };