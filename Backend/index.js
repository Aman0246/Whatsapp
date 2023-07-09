const express=require("express")
const app =express()
const {routes}=require("./Routes/Routes")
//------------------------------------------------------------------
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

app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}......`)
})

