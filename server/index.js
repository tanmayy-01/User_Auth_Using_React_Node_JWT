const express  = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const CustomerModel = require('./models/Customer')
const bcrypt = require('bcrypt')

const app = express()
app.use(express.json()) // this will transport our data from frontend to backend in json format
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Customer");

app.post('/login', (req,res) => {
    const {email, password} = req.body;
    CustomerModel.findOne({email: email})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, (err,response) => {
                if(response) {res.json("Success")}
                else {res.json("The Password is incorrect")}
            })
        }else {
            res.json("No record existed")
        }
    })
})

app.post('/register', (req, res) => {

    const {name, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        CustomerModel.create({name, email, password: hash})
        .then(customers => res.json(customers))
        .catch(err => res.json(err))
    })
    .catch(err => console.log(err.message))
})

app.listen(3001, () => {
    console.log("Server is running");
})