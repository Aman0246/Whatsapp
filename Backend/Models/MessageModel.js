const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    conversationId: {
        type: String
    },
    senderId: {
        type: String
    },
    receiverId: {
        type: String
    },
    text: {
        type: String
    },
    type: {
        type: String
    }
},
{ 
        timestamps: true
})

const messageModel = mongoose.model('messageModel', MessageSchema);

module.exports={messageModel}