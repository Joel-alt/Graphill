const express = require("express");
const router = express.Router();
const illustrationController = require("../controller/illustrationController");

router.get('/all', illustrationController.allIllustrations);
router.get('/:id', illustrationController.illustrationById);

module.exports = router;