const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    family_name: {
        type: String,
        required: true
    },
    given_name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        // required: true
    },
    password:{
        type: String,
        required: true 
    }
  
},{timestamps:true})

const userModel = mongoose.model('userModel', userSchema);

module.exports={userModel}