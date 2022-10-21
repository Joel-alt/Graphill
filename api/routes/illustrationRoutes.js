const express = require("express");
const router = express.Router();
const illustrationController = require("../controller/illustrationController");
const auth = require('../middleware/auth');

router.post('/:id/like', auth, illustrationController.likeIllustration);
router.delete('/:id/delete', auth, illustrationController.unlikeIllustration);
router.get('/hasLiked', auth,illustrationController.hasLiked);
router.get('/all', auth, illustrationController.allIllustrations);
router.get('/:id', auth,illustrationController.illustrationById);

module.exports = router;