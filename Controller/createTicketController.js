const { createTicketService } = require("../Service/createTicketService")

exports.createTicketController = (req, res) => {
    createTicketService(req).then((result) => {
        res.status(200).json(result)

    }).catch((error) => {
        res.status(500).json(error)
    })
}