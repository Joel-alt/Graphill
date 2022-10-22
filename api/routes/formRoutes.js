const express = require("express");
const router = express.Router();
const formController = require("../controller/formController");

router.post('/add', formController.addForm);
router.get('/all', formController.allForms);
router.get('/:id', formController.formById);

module.exports = router;