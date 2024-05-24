const mongoose = require('mongoose')


const Schema = mongoose.Schema({
    name: String,
    content: String,
    price: String,
    img: String,
}, collection = "Product", timeStamps=true)


module.exports = mongoose.model("Product", Schema)