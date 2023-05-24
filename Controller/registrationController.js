
const { registrationService } = require("../Service/registrationService")

exports.registrationController = (req, res) => {
    registrationService(req.body).then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(500).json(error);
    })
}