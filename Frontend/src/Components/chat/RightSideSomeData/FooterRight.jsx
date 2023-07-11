import { Box } from '@mui/material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import InputBase from '@mui/material/InputBase';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function FooterRight({textmessage,settextmessage,setDBchat}) { 
    const[newmessagePlane,setnewmessagePlane]=useState(false)
    let s=useSelector(state=>state)
    console.log(s.allSlices.chatId[0])
///all messages---------------------------------------
useEffect(()=>{
    
const getmessage=async()=>{
await axios.get(`/allmessage/${s.allSlices.chatId[0]}`).then((e)=>{
    // console.log(e.data.data[0].text)
    setDBchat(e.data.data)
})
}
s.allSlices.chatId[0]&&getmessage()
},[s.allSlices.chatId[0],newmessagePlane])

//---------------------------------------

    const handleEnter=(e)=>{
        if(e.key=="Enter"&& textmessage.length>0){
           
            let message={
                senderId:localStorage.getItem("id"),
                receiverId:s.allSlices.data[0]._id,
                conversationId:s.allSlices.chatId[0],
                type:typeof textmessage,
                text:textmessage
            }
                    
         const newMessage=async()=>{
            try {
                await axios.post("/newMessage",message).then((data)=>{
                    console.log(data)
                })
            } catch (error) {
                console.log(error.message)
            }
         }

         newMessage()
     
         settextmessage('')
         setnewmessagePlane(prev=>!prev)
            
        }

    }

    return (
        <Box sx={{ height: "8vh", background: "#ededed", display: "flex", justifyContent: "space-between", padding: "0 20px", alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center" }}>
                <SentimentSatisfiedAltIcon />
                <AttachFileIcon />
                <InputBase value={textmessage} sx={{ background: "#fff", width: "845px", borderRadius: "10px", padding: "0 20px" }} placeholder='Type a message' onChange={(e)=>settextmessage(e.target.value)}  onKeyUp={(e)=>{handleEnter(e)}} />
            </Box>

            <Box>
                <KeyboardVoiceIcon />
            </Box>
        </Box>
    )
}
