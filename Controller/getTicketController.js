const { getTicketService } = require("../Service/getTicketService")

exports.getTicketController = (req, res) => {
    getTicketService(req).then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(500).json(error);
    })
}