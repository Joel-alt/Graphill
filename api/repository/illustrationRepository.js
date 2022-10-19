const utility = require("../utility/index");

const allIllustrations = async () => {
    const pool = utility.pool;
    const query = `SELECT * FROM workOfArt`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

exports.allIllustrations = allIllustrations;