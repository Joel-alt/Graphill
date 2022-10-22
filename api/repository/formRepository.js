const utility = require("../utility/index");

const addForm = async (lastname, firstname, artistname, studies, hostingTime) => {
    const pool = utility.pool;
    const query = `INSERT INTO form ('lastname', 'firstname', 'artistname', 'studies', 'hostingTime') VALUES (${lastname},${firstname},${artistname},${studies},${hostingTime})`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

const allForms = async () => {
    const pool = utility.pool;
    const query = `SELECT * FROM form`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

const formById = async (id) => {
    const pool = utility.pool;
    const query = `SELECT * FROM form WHERE id = ${id}`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

exports.addForm = addForm;
exports.allForms = allForms;
exports.formById = formById;