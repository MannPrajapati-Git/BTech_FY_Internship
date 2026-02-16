// import express
// it is used to create a server
const express = require('express')
const app = express()

// express JSON middleware
// it is used to handle JSON data
app.use(express.json())

// assign a port number
const port = 3000;

// import mongoose
// it is used to connect to MongoDB
const mongoose = require('mongoose')

// import userModel
const userModel = require('./models/users')

// import cors
// it is used to allow cross-origin requests
const cors = require('cors')
app.use(cors())

// connection to db 
mongoose.connect('mongodb://localhost:27017/userAuth')
    .then(() => console.log("MongoDB connected successfully.")) // if success
    .catch((err) => console.log(err)) // if error


app.get('/', (req, res) => {
    res.send("The Backend is running")
})

// for adding static data to MongoDB
// use postman with post method : http://127.0.0.1:3000/addUserStaticData
app.post("/addUserStaticData", (req, res) => {
    var staticData = {
        "name": "Mann Prajapati",
        "mobileNumber": "7383797894",
        "email": "mannprajapati2502@gmail",
        "password": "123"
    }
    userModel.create(staticData)
        .then(() => res.send("Data saved successfully"))
        .catch((err) => res.send(err))
})

// for adding req.body data
// http://127.0.0.1:3000/addUserReqBodyData
// two options to use this api: 
// 1. use postman with post method : http://127.0.0.1:3000/addUserReqBodyData -> must use same attributes like userModel    
// 2. frontend code 
app.post('/addUserReqBodyData', (req, res) => {
    userModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => console.error(err));
});

// for adding req.body data and return JSON response
// api : http://127.0.0.1:3000/addUser
// two options to use this api: 
// 1. use postman with post method : http://127.0.0.1:3000/addUser -> must use same attributes like userModel    
// 2. frontend code
app.post("/addUser", (req, res) => {
    userModel.create(req.body)
        .then(data => res.json({
            flag: 1,
            msg: "Data saved successfully"
        }))
        .catch(err => console.error(err));
})


// for login api
// api : http://127.0.0.1:3000/login
// two options to use this api: 
// 1. use postman with post method : http://127.0.0.1:3000/login -> must use same attributes like userModel    
// 2. frontend code
app.post("/login", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    userModel.findOne({ email: email })
        .then(data => {
            if (data.password == password) {
                res.json({
                    flag: 1,
                    msg: "Login successful"
                });
            } else {
                res.json({
                    flag: 0,
                    msg: "Login failed"
                });
            }
        })
        .catch(err => res.json({ flag: 0, msg: "Data not found" }));
});


// to display data 
// find() function is used 
// api : http://127.0.0.1:3000/getUsersData
app.get("/getUsersData", (req, res) => {
    userModel.find()
        .then(data => res.json(data))
        .catch(err => console.error(err));
})




// Update user profile (edit)
// PUT /updateUser/:id
app.put('/updateUser/:id', (req, res) => {
    userModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(data => res.json({ flag: 1, msg: "Profile updated successfully", data }))
        .catch(err => res.status(500).json({ flag: 0, msg: "Update failed", error: err }));
});

// Delete user profile
// DELETE /deleteUser/:id
app.delete('/deleteUser/:id', (req, res) => {
    userModel.findByIdAndDelete(req.params.id)
        .then(data => {
            if (data) {
                res.json({ flag: 1, msg: "Profile deleted successfully" });
            } else {
                res.status(404).json({ flag: 0, msg: "User not found" });
            }
        })
        .catch(err => res.status(500).json({ flag: 0, msg: "Delete failed", error: err }));
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})