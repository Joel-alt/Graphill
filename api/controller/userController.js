const userRepository = require("../repository/userRepository");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {addUser} = require("../repository/userRepository");

async function login(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const result = await userRepository.userExist(username);
    if(result[0].length === 0) {
        return res.status(401).json({ error: 'User does not exist !' });
    }
    bcrypt.compare(password, result[0][0].password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ error: 'Wrong password !' });
            }
        res.status(200).json({
            token: jwt.sign(
                { userId: result[0][0].id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '1h' }
            )})
    });
}

async function signUp(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const result = await userRepository.userExist(username);
    if(result[0].length > 0) {
        return res.status(401).json({ error: 'User already exist !' });
    }
    const CryptedPassword = await bcrypt.hash(password, 10)
    const user = {
        Username: username,
        Password: CryptedPassword
    };
    await addUser(user);
    res.status(201).json({ message: 'User created !' });
}

async function outbid(req, res) {
    const id = req.auth.userId;
    const outbid = req.body.outbid;
    const result = await userRepository.hasBid(id);
    const result2 = await userRepository.getPieceInOutbid();
    const idOfWorkOfArt = result2[0][0].workOfArtID;
    if(result[0].length === 0) {
        await userRepository.addBid( idOfWorkOfArt, id, outbid);
        res.status(201).json({ message: 'Bid created !' });
    }
    else {
        await userRepository.outbid(id, outbid);
        res.status(201).json({ message: 'Outbid save !' });
    }
}

module.exports = {
    login,
    signUp,
    outbid
}