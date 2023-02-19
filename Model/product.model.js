const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    img: String,
    price: Number
})

const ProductModel = mongoose.model("products", productSchema)

module.exports = {
    ProductModel
}