const express  = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const CustomerModel = require('./models/Customer')

const app = express()
app.use(express.json()) // this will transport our data from frontend to backend in json format
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Customer");

app.post('/register', (req, res) => {
    CustomerModel.create(req.body)
    .then(customers => res.json(customers))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running");
})