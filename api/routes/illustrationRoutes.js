const express = require("express");
const router = express.Router();
const illustrationController = require("../controller/illustrationController");

router.get('/all', illustrationController.allIllustrations);

module.exports = router;