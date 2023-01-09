const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String 
    }
})

const User = mongoose.model("crud_operation",userSchema)
module.exports = User;