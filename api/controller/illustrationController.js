const auth = require("../middleware/auth");
const illustrationRepository = require("../repository/illustrationRepository");

async function sortLikesUp(req, res) {
    const result = await illustrationRepository.sortLikesUp();
    res.send(result[0]);
}

async function sortLikesDown(req, res) {
    const result = await illustrationRepository.sortLikesDown();
    res.send(result[0]);
}

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

module.exports = {
    sortLikesUp,
    sortLikesDown,
    illustrationById,
    likeIllustration,
    hasLiked,
    createLikeList,
    unlikeIllustration,
}