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
    !loginusers?.some(user=>user._id===data._id)&&loginusers.push({...data,socketId})
    console.log(loginusers.length)
    console.log(loginusers)
}

const removeUser = (socketId) => {
    loginusers = loginusers?.filter(user => user.socketId !== socketId);
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
        console.log(data)
      const user = loginusers.find(user => user._id === data.receiverId);
    //   console.log("users",user)
    if(user!=undefined){
        console.log("ok")
        io.emit('getMessage',data)
    }
    else{
        console.log("socket is undefine")
    }

     })
  });


//   Socket.io Connected...
// 2
// [
//   {
//     _id: '64aa82d50b7e475cee0bdac0',
//     email: 'ramagya8115555164@gmail.com',
//     family_name: 'kuamr',
//     given_name: 'ramagya',
//     picture: 'https://lh3.googleusercontent.com/a/AAcHTtcgKaSpiR-gBXPe9YloFzvWeSLxhcThkSBms03w4aJZ=s96-c',
//     password: '$2b$10$b9F0RF79ssp4ifgquKKX9.V7.pzt9bX7B9isXq/cJWp6SFCxn2EyK',
//     createdAt: '2023-07-09T09:50:13.697Z',
//     updatedAt: '2023-07-09T09:50:13.697Z',
//     __v: 0,
//     socketId: '_n8VARci51lg1xY0AAAF'
//   },
//   {
//     _id: '64ad16bcba104ce4eb684c37',
//     email: 'amankashyap0246@gmail.com',
//     family_name: 'Kashyap',
//     given_name: 'Aman',
//     picture: 'https://lh3.googleusercontent.com/a/AAcHTtdpBhGM-aSuPSaDnb9jnZllWcbSBxIYfdV43HJV8iW5Odo=s96-c',
//     password: '$2b$10$qcaOCIKG920wrRvbLgaqLOIHgpwgg2uWqCgWQQOECdUDyhNjaUyea',
//     createdAt: '2023-07-11T08:45:48.738Z',
//     updatedAt: '2023-07-11T08:45:48.738Z',
//     __v: 0,
//     socketId: 'SSaRfVrf_4uYrAugAAAH'
//   }
// ]
//{
//     senderId: '64aa82d50b7e475cee0bdac0',
//     receiverId: '64ad16bcba104ce4eb684c37',
//     conversationId: '64ad16c4ba104ce4eb684c3f',
//     type: 'string',
//     text: 'helllow'
//   }