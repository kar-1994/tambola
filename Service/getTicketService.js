const { getTicketDetails } = require("../db/model")

exports.getTicketService = (req) => {
    return new Promise(async (resolve, reject) => {
        const ticket = await getTicketDetails(req.uid);
        const pageSize = req.query.pageSize;
        const pageNum = req.query.pageNumber;
        const dataset = ticket.splice(pageNum*pageSize, pageSize);

        return resolve({
            code: 0,
            data:[...dataset]
        })
    })
}