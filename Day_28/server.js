const express = require('express')

// importing mongoose
const mongoose = require('mongoose')

// import model schema
const users = require('./models/users')

const app = express()
const port = 3000

// connection code to connect MongoDB
mongoose.connect('mongodb://localhost:27017/mydb')
.then(()=>console.log("MongoDB connected successfully."))
.catch((err)=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// create api to save the static data in database
// so wheneevr you go to this api http://localhost:3000/add-users it will save the data
app.get('/add-users', (req,res) =>{

    // creating the object (static data)
    var userData = {
        userName : 'Mann Prajapati',
        userEmail : 'mannprajapati2502@gmail.com',
        userPhone : 7383797894,
        userGender : 'Male'
    }

    // assign data to model schema
    var user = new users(userData)

    // save data to database
    user.save()
    .then((data) => {
        res.send("data saved successfully")
    })
    .catch((err) => {
        res.send("error in saving data")
    })
} )

// fetching the data from the collection using find() method.
app.get('/get-users', (req,res) =>{
    users.find()
    .then((data)=>{
        console.log(data)
        // res.send(JSON.stringify(data))
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
    })
})
    
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
