import { Box } from '@mui/material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import InputBase from '@mui/material/InputBase';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from '@emotion/styled';
import { io } from 'socket.io-client';


export default function FooterRight({textmessage,settextmessage,setDBchat,setFile,file,setincommingMessage,incommingMessage}) { 
    const ENDPOINT="https://whatsapp1-igge.onrender.com";
    let socket;
    socket=io(ENDPOINT)

   
    const[newmessagePlane,setnewmessagePlane]=useState(false)
    let s=useSelector(state=>state)
    console.log(s.allSlices)
///all messages---------------------------------------
useEffect(() => {
    socket.on("getMessage", data => {
      console.log("Received message:", data);
      setincommingMessage({
        ...data,
        createdAt:Date.now()
      })
    })
    incommingMessage&&incommingMessage.senderId&&
    setDBchat(prev=>[...prev,incommingMessage])
  }, [incommingMessage]);
  

//main----------------------------section----------------------------------------
useEffect(()=>{
    
const getmessage=async()=>{
await axios.get(`/allmessage/${s.allSlices.chatId[0]}`).then((e)=>{

    setDBchat(e.data.data)
})
}
s.allSlices.chatId[0]&&getmessage()
},[s.allSlices.chatId[0],newmessagePlane])


// useEffect(()=>{
//     incommingMessage&&incommingMessage.senderId&&
//     setDBchat(prev=>[...prev,incommingMessage])

// },[incommingMessage])

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

            if(file.length!=0){
                         
                         const Data=new FormData()
                          Data.append("file",file)
                          Data.append("name",file.name)
                
                const uploadFiletobackend=async()=>{

                    try {
                        await axios.post("/upload/files",Data)
                    } catch (error) {
                        
                    }
                }

                uploadFiletobackend()
            }
            
            socket.emit("sendMessage",message)
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
    const Clip=styled(AttachFileIcon)({
        transform:"rotate(40deg)"
    })

    const onFileChange=(e)=>{
        setFile(e.target.files[0])
        settextmessage(e.target.files[0].name)
    }

    return (
        <Box sx={{ height: "8vh", background: "#ededed", display: "flex", justifyContent: "space-between", padding: "0 20px", alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center" }}>
                <SentimentSatisfiedAltIcon />
                <input type="file" style={{display:"none"}} id="fileattach"  onChange={(e)=>onFileChange(e)}/>
                <label htmlFor='fileattach'>
                <Clip />
                </label>

                <InputBase value={textmessage} sx={{ background: "#fff", width: "845px", borderRadius: "10px", padding: "0 20px" }} placeholder='Type a message' onChange={(e)=>settextmessage(e.target.value)}  onKeyUp={(e)=>{handleEnter(e)}} />
            </Box>

            <Box>
                <KeyboardVoiceIcon />
            </Box>
        </Box>
    )
}
