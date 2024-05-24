const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./src/routers/router.js')
const PORT = process.env.PORT
require("./src/config/db.js")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use("/", router)
app.listen(PORT , ()=>{
    console.log("SERVER HAS STARTED")
})