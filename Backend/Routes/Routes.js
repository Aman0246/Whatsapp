const express=require("express")
const routes=express.Router()
const {adduser,login,user,alluser}=require("../Controllers/user")
const {newconversation} =require("../Controllers/conversation-controller")
const {newMessage,getMessage}=require("../Controllers/messageController")

//registration
routes.post("/adduser",adduser)
routes.post("/login",login)
routes.post("/userCheck",user)
routes.get("/alluser",alluser)
routes.post("/conversation/add",newconversation)
routes.post("/newMessage",newMessage)
routes.post("/allmessage/:id",getMessage)


module.exports={routes}