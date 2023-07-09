const express=require("express")
const routes=express.Router()
const {adduser,login,user}=require("../Controllers/user")

//registration
routes.post("/adduser",adduser)
routes.post("/login",login)
routes.post("/userCheck",user)


module.exports={routes}