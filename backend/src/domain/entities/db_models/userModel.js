const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    }
})



const user = mongoose.model("User",userSchema)
module.exports=user