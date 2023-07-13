const express=require("express")
const app =express()
const {routes}=require("./Routes/Routes")
//------------------------------------------------------------------
//========================================SOCKIT-IO=======================================================================
const { Server } = require("socket.io");


//=================================================SOCKIT-IO===============================================================
//------------------------------------------------------------------
var cors = require('cors')
app.use(cors({origin: true, credentials: true}));
//------------------------------------------------------------------

app.use(express.urlencoded({extended:false}))//for taking data(file which is in json formet)
app.use(express.json())
//------------------------------------------------------------------
require("dotenv").config()
const mongoose=require("mongoose");
mongoose.connect(process.env.MONGOCONNECT).then(()=>{console.log("DB connected...")}).catch(()=>{console.log("DB not connected...")})
app.use("/",routes)
//-------------------------------------------------------------------------------------------->

//-------------------------------------------------------------------------------------------->

const server=app.listen(process.env.PORT,()=>{//first
    console.log(`server is running at ${process.env.PORT}......`)
})

//-----------------------------------------------------------------------------------
let loginusers=[]

const addUser=(data,socketId)=>{
    !loginusers.some(user=>user._id===data._id)&&loginusers.push({...data,socketId})
    console.log(loginusers.length)
}

const removeUser = (socketId) => {
    loginusers = loginusers.filter(user => user.socketId !== socketId);
}



const getUser = (userId) => {
    return loginusers.find(user => user.receiverId === userId);
}



const io = new Server(server,{pingTimeout:60000 ,cors:{origin:"http://localhost:5173",credentials:true}}) ;
io.on('connection', (socket) => {
    console.log('Socket.io Connected...');

        //logined user
    socket.on("adduser",(data)=>{
       addUser(data,socket.id)
       io.emit("getuser",loginusers)

    })

       //disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected..');
        removeUser(socket.id);
        io.emit('getuser',loginusers);
    })

      //send message
     socket.on('sendMessage', (data) => {
      const user = getUser(data.receiverId);
      console.log(user,data)
      console.log(loginusers)

    //   io.to(user.socketId).emit('getMessage', data)
     })
  });
















  