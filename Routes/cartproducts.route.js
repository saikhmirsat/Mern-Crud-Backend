const express = require('express')
const { CartProductModel } = require('../Model/cartproducts.model')

const cartproductRoute = express.Router()

cartproductRoute.get('/', async (req, res) => {
    try {
        const data = await CartProductModel.find()
        res.send(data)
    } catch (err) {
        console.log(err)
    }
})
cartproductRoute.post('/add', async (req, res) => {
    const data = req.body
    try {
        const prod = new CartProductModel(data)
        await prod.save()
        res.send({ "msg": "Product added successfully" })
    } catch (err) {
        console.log(err)
    }
})
cartproductRoute.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    try {
        await CartProductModel.findByIdAndDelete({ _id: id })
        res.send({ "msg": `note with id:${id} has been deleted` })
    } catch (err) {
        console.log(err)
    }
})

module.exports = {
    cartproductRoute
}