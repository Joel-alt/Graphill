const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const auth = require("../middleware/auth");

router.post('/login', userController.login);
router.post('/signup', userController.signUp);
router.post('/outbid', auth,userController.outbid);


module.exports = router;