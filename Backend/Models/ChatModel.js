const { default: mongoose } = require("mongoose");
const conversationSchema=new mongoose.Schema({
    member:{
        type:[
            senderId=String,                               //0index
            receiverId= String                             //1index
        ]
    },

    message:{
        type:String
    },


},{timestamps:true})

const conversationModel=new mongoose.model('conversationModel',conversationSchema);
module.exports={conversationModel}