// data store in database using apis
const express = require('express')
const mongoose = require('mongoose')
const users = require('./models/users')
const app = express()
const port = 3000

// JSON middleware : used to handle JSON data in express
app.use(express.json())

// connection code to connect MongoDB
mongoose.connect('mongodb://localhost:27017/mydb')
.then(()=>console.log("MongoDB connected successfully."))
.catch((err)=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// create api to save the data in database
// so in postman use this api http://localhost:3000/add-users it will save the data

// in postman :
// select post method
// go body > raw > JSON
// add data in json formate use same parameters(keys) as defined in model schema : "userName","userEmail","userPhone","userGender"
app.post('/add-users', (req,res) =>{
    users.create(req.body)
    .then(()=>res.json({flag:1,msg:"Data saved successfully"}))
    .catch((err)=>res.json({flag:0,msg:"Error in saving data"}))
})


// for getting all data from database
// so in postman use this api http://localhost:3000/display-users it will display the data

// in postman :
// select get method
// paste api and send
app.get('/display-users', (req,res) =>{  
    users.find()
    .then((data)=>res.json(data))
    .catch((err)=>res.json({flag:0,msg:"Error in getting data"+err}))
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
