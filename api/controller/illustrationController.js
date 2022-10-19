const illustrationRepository = require("../repository/illustrationRepository");

async function allIllustrations(req, res) {
    const result = await illustrationRepository.allIllustrations();
    res.send(result[0]);
}

module.exports = {
    allIllustrations
}