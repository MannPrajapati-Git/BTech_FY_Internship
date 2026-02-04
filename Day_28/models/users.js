// create schema here 

// import mongoose
const mongoose = require("mongoose");

// creating schema
const userSchema = new mongoose.Schema({
    userName : String,
    userEmail : String,
    userPhone : Number,
    userGender : String
});

// exporting schema
module.exports = mongoose.model("users", userSchema);