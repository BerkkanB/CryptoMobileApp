const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")
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

userSchema.pre("save",async function(next){
    const user = this
    const SALT_WORK_FACTOR = 10;
    try {
        if(!user.isModified("password")) return next();
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
        const hashedPassword = await bcrypt.hash(user.password,salt)
        user.password = hashedPassword
        next()
    } catch (error) {
        next(error)
    }
})

userSchema.methods.checkPassword = async function(password){
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw error
    }
}

const user = mongoose.model("User",userSchema)
module.exports=user