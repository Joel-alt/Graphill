const express = require("express");
const router = express.Router();
const illustrationController = require("../controller/illustrationController");

router.get('/all', illustrationController.allIllustrations);
router.get('/:id', illustrationController.illustrationById);
router.post('/:id/like', illustrationController.likeIllustration);
router.get('/:id/hasLiked', illustrationController.hasLiked);

module.exports = router;    