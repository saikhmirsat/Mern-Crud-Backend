const express = require('express')
const { connection } = require('./config/db')
const { productRoute } = require("./Routes/product.route")
require('dotenv').config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("This is new home")
})

app.use('/products', productRoute)


app.listen(process.env.Port, async () => {
    try {
        await connection
        console.log("DB is connected")
    } catch (err) {
        console.log("DB is not connected")
        console.log(err)
    }
    console.log({ "Server Running at Port": process.env.Port })
})