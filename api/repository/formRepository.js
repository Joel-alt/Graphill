const utility = require("../utility/index");

const all = async (lastname, firstname, artistname, email, hostingTime) => {
    const pool = utility.pool;
    const query = `INSERT INTO form (lastname, firstname, artistname, email, hostingTime) VALUES ("${lastname}","${firstname}","${artistname}","${email}","${hostingTime}")`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}


exports.all = all;

