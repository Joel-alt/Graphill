const express = require("express");
const router = express.Router();
const formController = require("../controller/formController");

router.post('/all', formController.all);

module.exports = router;
