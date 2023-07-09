const express=require("express")
const routes=express.Router()
const {adduser,login,user,alluser}=require("../Controllers/user")

//registration
routes.post("/adduser",adduser)
routes.post("/login",login)
routes.post("/userCheck",user)
routes.get("/alluser",alluser)


module.exports={routes}