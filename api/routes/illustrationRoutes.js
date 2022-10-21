const express = require("express");
const router = express.Router();
const illustrationController = require("../controller/illustrationController");
const auth = require('../middleware/auth');

router.post('/:id/like', illustrationController.likeIllustration);
router.get('/:id/hasLiked', illustrationController.hasLiked);

router.get('/all', auth, illustrationController.allIllustrations);
router.get('/:id', auth,illustrationController.illustrationById);

module.exports = router;