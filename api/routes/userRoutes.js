const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post('/login', userController.login);
router.post('/signup', userController.signUp);


module.exports = router;