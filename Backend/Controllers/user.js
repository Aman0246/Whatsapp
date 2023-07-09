const {userModel}=require("../Models/userModel")
const {hassPassword,compare}=require("../Bcrypt")
var validator = require('validator');
const {validString}=require("../utils")
//Registration
const adduser = async(req, res) => {
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
}

//Login
const login=async(req,res)=>{
    let{ email , password ,picture}  = req.body;
    if(!validator.isEmail(email))return res.send({status:false,message:"invalid Email"})
    let oldUser=await userModel.findOne({email})
    if(!oldUser)return res.send({status:false,message:"Not Registered"})
    let comparePassword=await compare(password,oldUser.password)
    if(!comparePassword)return res.send({status:false,message:"Wrong Password"})
    res.send({status:true,message:"login Successful",data:oldUser})  

}

//userCheck 
const user=async(req,res)=>{
    let{id}=req.body
    let data= await userModel.findOne({_id:id})
   if(!data)return res.send({status:false,message:"Login Please"})
   res.send({status:true,message:"single user",data:data}) 
}




module.exports = { adduser,login,user };



