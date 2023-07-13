const { messageModel }= require( "../Models/MessageModel")
const { conversationModel } = require("../Models/ChatModel");
const { uploadFile,download}=require("../AWS3/aws3")

const newMessage=async(req,res)=>{
    try {
        let {senderId,receiverId,conversationId,type,text}=req.body
        // console.log(req.body)
        let data=await messageModel.create({senderId,receiverId,conversationId,type,text})
        await conversationModel.findByIdAndUpdate({_id:conversationId},{message:text},{new:true})
        res.send({status:true,message:"new chat",data:data})
    } catch (error) {
        console.log({status:false,message:error.message})
    }
}


const getMessage=async(req,res)=>{
   try {
    let {id}=req.params
    const messsages=await messageModel.find({conversationId:id})
    if(messsages.length>0)return res.send({status:true,message:` message of ${id}`,data:messsages})
   } catch (error) {
    console.log({status:false,message:error.message})
   }
}




const uploadfile=async(req,res)=>{
    try {
        let file=req.file
    //    let upl= await uploadFile(file)
       console.log(file)
            
    } catch (error) {
        
    }
}


module.exports={newMessage,getMessage,uploadfile}