const utility = require("../utility/index");

const userExist = async (username) => {
    const pool = utility.pool;
    const query = `SELECT * FROM user WHERE username = "${username}"`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

const addUser = async (user) => {
    const pool = utility.pool;
    const query = `INSERT INTO user (username, password) VALUES ("${user.Username}", "${user.Password}")`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

const outbid = async (id, outbid) => {
    const pool = utility.pool;
    const query = `UPDATE bidList SET price = ${outbid} where userID = ${id}`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

const hasBid = async (id) => {
    const pool = utility.pool;
    const query = `SELECT * FROM bidList WHERE userID = ${id}`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

const addBid = async (idOfPiece,id, outbid) => {
    const pool = utility.pool;
    const query = `INSERT INTO bidList (workOfArtID,userID, price) VALUES (${idOfPiece}, ${id}, ${outbid})`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

const getPieceInOutbid = async () => {
    const pool = utility.pool;
    const query = `SELECT workOfArtID FROM bidList`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

exports.userExist = userExist;
exports.addUser = addUser;
exports.outbid = outbid;
exports.hasBid = hasBid;
exports.addBid = addBid;
exports.getPieceInOutbid = getPieceInOutbid;
