const express = require("express");
const { loginController } = require("./Controller/loginController");
const { registrationController } = require("./Controller/registrationController");
const { createTicketController } = require("./Controller/createTicketController");
const { validateToken } = require("./Authentication/jwt");
const { getTicketController } = require("./Controller/getTicketController");
const router = express.Router();

router.post("/login",loginController)
router.post("/register",registrationController)
router.post("/createTicket",validateToken,createTicketController)
router.get("/getTickets",validateToken,getTicketController)



module.exports = router;
