const jwt = require('jsonwebtoken');
 
function authenticateToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({ auth: false, message: 'Token não fornecido' });
    }
 
    jwt.verify(token, 'secreto', (err, decoded) => {
        if (err) {
            console.error('error na verificação do token:', err)
            return res.status(403).json({ auth: false, message: 'Falha na autenticação do token' });
        }
        // console.log('token decodificado:', decoded)
        req.userId = decoded.userId;
        next();
    });
}
 
module.exports =  authenticateToken