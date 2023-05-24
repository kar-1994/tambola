const express = require("express");
const cors= require("cors");
const helmet =require("helmet");

const app = express();
const dotenv = require('dotenv');

app.use(cors({origin:true}));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const router=require("./route")
app.use("/tambola/api",router);
dotenv.config();
const port=process.env.PORT;
const server=app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
server.setTimeout(3600000)
// module.exports = app;