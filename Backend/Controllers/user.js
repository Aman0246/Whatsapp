const {userModel}=require("../Models/userModel")
const {hassPassword,compare}=require("../Bcrypt")
var validator = require('validator');
const {validString}=require("../utils")

//Registration
const adduser = async(req, res) => {
    try {
        let {email,family_name, given_name,picture,password}=req.body
        if(!email||!family_name||!given_name||!password)return res.send({status:false,message:"Empty Field"})
        if(!validator.isEmail(email))return res.send({status:false,message:"invalid Email"})
        if(!validString(family_name))return res.send({status:false,message:"invalid LastName"})
        if(!validString(given_name))return res.send({status:false,message:"invalid FirstName"})
        let oldUser=await userModel.findOne({email})
        if(oldUser)return res.send({status:false,message:"Email Already Registered"})
        const hassPass= await hassPassword(password)
        if(!hassPass)return res.send({status:false,message:"Error in hassing"})
        let data=await userModel.create({email,family_name, given_name,picture,password:hassPass})
        res.send({status:true,message:"Registerd",data:data})   
        
    } catch (error) {
        console.log(error.message)
    }
}

//Login
const login=async(req,res)=>{
    try {
        
        let{ email , password ,picture}  = req.body;
        if(!validator.isEmail(email))return res.send({status:false,message:"invalid Email"})
        let oldUser=await userModel.findOne({email})
        if(!oldUser)return res.send({status:false,message:"Not Registered"})
        let comparePassword=await compare(password,oldUser.password)
        if(!comparePassword)return res.send({status:false,message:"Wrong Password"})
        res.send({status:true,message:"login Successful",data:oldUser})  
    } catch (error) {
        console.log(error.message)
    }

}

//userCheck 
const user=async(req,res)=>{
    try {
        let{id}=req.body
        let data= await userModel.findOne({_id:id})
       if(!data)return res.send({status:false,message:"Login Please"})
       res.send({status:true,message:"single user",data:data}) 
        
    } catch (error) {
        console.log(error.message)
    }
}


//allUser
const alluser=async(req,res)=>{
    try {
        let data=await userModel.find()
        console.log(data)
        if(data.length==0)return res.send({status:false,message:"No User found"})
        res.send({status:true,message:"All User",data:data}) 

        
    } catch (error) {
        console.log(error.message)
    }
}







module.exports = { adduser,login,user,alluser };



