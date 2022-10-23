const formRepository = require("../repository/formRepository");

async function all(req, res) {
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const artistname = req.body.artistname;
    const email = req.body.email;
    const hostingTime = req.body.hostingTime;

    const result = await formRepository.all(lastname, firstname, artistname, email, hostingTime);
    res.status(201).json({message: 'Form submited !'});
}

module.exports = {
    all,
}
