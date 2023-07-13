import React, { useState } from 'react'
import ChatHadder from './RightSideSomeData/ChatHadder'
import Box from '@mui/material/Box';
import Message from './RightSideSomeData/message';
import FooterRight from './RightSideSomeData/FooterRight';

export default function ChatBox({activeuser,setactiveuser}) {
  const[textmessage,settextmessage]=useState("")
  const[DBchat,setDBchat]=useState("")
  const[file,setFile]=useState([])
  return (
    <Box sx={{width:"100%"}}>
      <ChatHadder activeuser={activeuser} setactiveuser={setactiveuser} />
      <Message DBchat={DBchat} textmessage={textmessage} setDBchat={setDBchat} />
      <FooterRight file={file} setFile={setFile} DBchat={DBchat} setDBchat={setDBchat}   textmessage={textmessage} settextmessage={settextmessage} />
       </Box>
  )
}
