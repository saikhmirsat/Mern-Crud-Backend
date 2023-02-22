const mongoose = require('mongoose')

const cartProductShema = mongoose.Schema({
    title: String,
    image: String,
    discount: Number,
    price: Number,
    quantity: Number
})

const CartProductModel = mongoose.model("cartproducts", cartProductShema)

module.exports = {
    CartProductModel
}