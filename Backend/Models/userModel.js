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
        default:"https://images.unsplash.com/photo-1504579264001-833438f93df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    password:{
        type: String,
        required: true 
    }
  
},{timestamps:true})

const userModel = mongoose.model('userModel', userSchema);

module.exports={userModel}