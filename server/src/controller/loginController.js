const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/loginModel');

async function login(req, res) {
  const { userEmail, userPassword } = req.body;

  try {
    // Recupera usuário pelo e-mail
    const user = await User.getUserByEmail(userEmail);

    if (!user) {
      return res.status(401).json({ auth: false, message: 'Credenciais inválidas' });
    }

    // Algumas bibliotecas ou drivers podem retornar os nomes das colunas em caixa baixa
    const passwordHash = user.SENHA || user.senha;

    // Compara a senha digitada com o hash recuperado do banco
    const validPassword = await bcrypt.compare(userPassword, passwordHash);

    if (!validPassword) {
      return res.status(401).json({ auth: false, message: 'Senha incorreta' });
    }

    // Gera o token JWT
    const token = jwt.sign(
      { userId: user.ID_USER },
      'secreto',
      { expiresIn: '1h' }
    );

    res.status(200).json({
      auth: true,
      token: token,
      userId: user.ID_USER,
      nome: user.NOME,
      message: 'Login bem-sucedido'
    });

  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ auth: false, message: 'Erro interno do servidor' });
  }
}

module.exports = { login };