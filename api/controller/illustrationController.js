const auth = require("../middleware/auth");
const illustrationRepository = require("../repository/illustrationRepository");

async function illustrationById(req, res) {
    const id = req.params.id;
    const result = await illustrationRepository.illustrationById(id);
    res.send(result[0]);
}

async function likeIllustration(req, res) {
    const id = req.params.id;
    const userID = req.auth.userId;
    const result = await illustrationRepository.likeIllustration(id, userID);
    res.send(result[0]);
}

async function hasLiked(req, res) {
    const userID = req.auth.userId;
    const result = await illustrationRepository.hasLiked(userID);
    res.send(result[0]);
}

async function createLikeList(req, res) {
    const result = await illustrationRepository.createLikeList(id, userID);
    res.send(result[0]);
}

async function unlikeIllustration(req, res) {
    const id = req.params.id;
    const userID = req.auth.userId;
    const result = await illustrationRepository.unlikeIllustration(id, userID);
    res.send(result[0]);
}

async function allIllustrations(req, res) {
    const sort = req.query.sortBy;
    const category = req.query.cat;
    const result = await illustrationRepository.sort(sort, category);
    res.send(result[0]);
}

async function getBidList(req, res) {
    const result = await illustrationRepository.getBidList();
    res.send(result[0]);
}

async function getArtist(req, res) {
    const result = await illustrationRepository.getArtist();
    res.send(result[0][0]);
}

module.exports = {
    illustrationById,
    likeIllustration,
    hasLiked,
    unlikeIllustration,
    allIllustrations,
    getBidList,
    getArtist,
}