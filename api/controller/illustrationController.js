const illustrationRepository = require("../repository/illustrationRepository");

async function allIllustrations(req, res) {
    const result = await illustrationRepository.allIllustrations();
    res.send(result[0]);
}

async function illustrationById(req, res) {
    const id = req.params.id; // req.params.id is the id in the url
    const result = await illustrationRepository.illustrationById(id);
    res.send(result[0]);
}

async function likeIllustration(req, res) {
    const id = req.params.id;
    const result = await illustrationRepository.likeIllustration(id);
    res.send(result[0]);
}

module.exports = {
    allIllustrations,
    illustrationById,
    likeIllustration
}