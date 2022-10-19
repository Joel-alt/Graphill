const loginRepository = require("../repository/loginRepository");
const jwt = require('jsonwebtoken');

async function login(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const result = await loginRepository.userExist(username, password);
    if(result[0].length !== 1) {
        return res.status(401).json({ error: 'User does not exist !' });
    }
    if(password !== result[0][0].password) {
        return res.status(401).json({ error: 'Wrong password !' });
    }
    res.status(200).json({
        userId: result[0][0].id,
        token: jwt.sign(
            { userId: result.id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' }
        )
    });
}

module.exports = {
    login
}