const { conversationModel } = require("../Models/ChatModel")

const newconversation=async(req,res)=>{
    try {
         const {senderId,receiverId}=req.body
         console.log({senderId,receiverId})
         const exist=await conversationModel.findOne({member:{$all:[senderId,receiverId]}})
         if(exist) return res.send({status:false,message:"conversation already exist",data:exist})
        
        
        
         const conversation={
            member:[senderId,receiverId]
         }
         console.log(conversation)
         
         await  conversationModel.create(conversation);
         res.send({status:true,message:"conversation created successfully"})


    } catch (error) {
        console.log(error.message)
        
    }
}
module.exports={newconversation}