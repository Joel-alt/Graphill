const utility = require("../utility/index");

const userExist = async (username, password) => {
    const pool = utility.pool;
    const query = `SELECT * FROM user WHERE username = "${username}"`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}


exports.userExist = userExist;
