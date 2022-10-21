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

exports.userExist = userExist;
exports.addUser = addUser;
