const express=require("express")
const routes=express.Router()
const {adduser,login,user,alluser}=require("../Controllers/user")
const {newconversation} =require("../Controllers/conversation-controller")
const {newMessage,getMessage,uploadfile}=require("../Controllers/messageController")
//------------------------------------------------------------------------------------------------------
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Set the destination directory for uploaded files
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Set the filename for uploaded files
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    },
});
const upload = multer({ storage: storage });




//registration
routes.post("/adduser",adduser)
routes.post("/login",login)
routes.post("/userCheck",user)
routes.get("/alluser",alluser)
routes.post("/conversation/add",newconversation)
routes.post("/newMessage",newMessage)
routes.get("/allmessage/:id",getMessage)
routes.post("/upload/files",upload.single('file'),uploadfile)


module.exports={routes}