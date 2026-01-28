const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phonenumber: {
    type: Number
  },
  role: {
    type: String,
    default: "User"
  },
  address:{
    type:String,
    default: "Add your Address"
  }
})

module.exports=mongoose.model("user",userSchema)