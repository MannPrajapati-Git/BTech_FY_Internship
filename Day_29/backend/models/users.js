// Table Structure

// import mongoose
const mongoose = require("mongoose")

// create  schema
const userSchema = new mongoose.Schema({
    name : String,
    mobileNumber : Number,
    email : String,
    password : String,
})

// create model
const userModel = mongoose.model('users',userSchema)

// export model
module.exports = userModel;