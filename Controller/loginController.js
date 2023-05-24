const { loginService } = require("../Service/loginService")

exports.loginController = (req, res) => {
    loginService(req.body)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
};