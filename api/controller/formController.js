const formRepository = require("../repository/formRepository");

async function addForm(req, res) {
    const result = await formRepository.addForm();
    res.send(result[0]);
}

async function allForms(req, res) {
    const result = await formRepository.allForms();
    res.send(result[0]);
}

async function formById(req, res) {
    const id = req.params.id; // req.params.id is the id in the url
    const result = await formRepository.formById(id);
    res.send(result[0]);
}

module.exports = {
    addForm,
    allForms,
    formById
}