const express = require('express')
const { ProductModel } = require('../Model/product.model')

const productRoute = express.Router()

productRoute.get('/', async (req, res) => {
    try {
        const data = await ProductModel.find()
        res.send(data)
    } catch (err) {
        console.log(err)
    }
})

productRoute.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const data = await ProductModel.find({ _id: id })
        res.send(data)
    } catch (err) {
        res.send("Can't get data")
    }
})

productRoute.post('/add', async (req, res) => {
    const data = req.body
    try {
        const prod = new ProductModel(data)
        await prod.save()
        res.send("Product added successfully")
    } catch (err) {
        console.log(err)
    }
})

productRoute.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    try {
        await ProductModel.findByIdAndDelete({ _id: id })
        res.send({ "msg": `note with id:${id} has been deleted` })
    } catch (err) {
        console.log(err)
    }
})

productRoute.patch('/update/:id', async (req, res) => {
    const id = req.params.id
    const payload = req.body
    try {
        await ProductModel.findByIdAndUpdate({ _id: id }, payload)
        res.send({ "msg": `note with id:${id} has been updated` })
    } catch (err) {
        console.log(err)
    }
})

module.exports = {
    productRoute
}