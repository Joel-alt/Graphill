const utility = require("../utility/index");

const sortLikesUp = async () => {
    const pool = utility.pool;
    const query = `SELECT * FROM workOfArt ORDER BY likes DESC`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

const sortLikesDown = async () => {
    const pool = utility.pool;
    const query = `SELECT * FROM workOfArt ORDER BY likes ASC`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

const illustrationById = async (id) => {
    const pool = utility.pool;
    const query = `SELECT * FROM workOfArt WHERE id = ${id}`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

const likeIllustration = async (id, userID) => {
    const pool = utility.pool;
    const query = `UPDATE workOfArt SET likes = likes + 1 WHERE id = ${id}`;
    const promisePool = pool.promise();
    createLikeList(id, userID);
    return await promisePool.query(query);
}

const hasLiked = async (userID) => {
    const pool = utility.pool;
    const query = `SELECT DISTINCT workOfArt.id, likes FROM likelist
                   RIGHT JOIN workOfArt ON workOfArt.id = likelist.workOfArtID
                   WHERE userID = ${userID};`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

const createLikeList = async (id, userID) => {
    const pool = utility.pool;
    const query = `INSERT INTO likelist (userID, workOfArtID) VALUES (${userID}, ${id})`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

const unlikeIllustration = async (id, userID) => {
    const pool = utility.pool;
    const query = `UPDATE workOfArt SET likes = likes - 1 WHERE id = ${id}`;
    const promisePool = pool.promise();
    deleteLikeList(id, userID);
    return await promisePool.query(query);
}

const deleteLikeList = async (id, userID) => {
    const pool = utility.pool;
    const query = `DELETE FROM likelist WHERE userID = ${userID} AND workOfArtID = ${id}`;
    const promisePool = pool.promise();
    return await promisePool.query(query);
}

exports.sortLikesUp = sortLikesUp;
exports.sortLikesDown = sortLikesDown;
exports.illustrationById = illustrationById;
exports.likeIllustration = likeIllustration;
exports.hasLiked = hasLiked;
exports.createLikeList = createLikeList;
exports.unlikeIllustration = unlikeIllustration;