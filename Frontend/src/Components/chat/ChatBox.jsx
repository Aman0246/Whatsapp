import React, { useState } from 'react'
import ChatHadder from './RightSideSomeData/ChatHadder'
import Box from '@mui/material/Box';
import Message from './RightSideSomeData/message';
import FooterRight from './RightSideSomeData/FooterRight';

export default function ChatBox() {
  const[textmessage,settextmessage]=useState("")
  const[DBchat,setDBchat]=useState("")
  return (
    <Box sx={{width:"100%"}}>
      <ChatHadder/>
      <Message DBchat={DBchat} setDBchat={setDBchat} />
      <FooterRight DBchat={DBchat} setDBchat={setDBchat}   textmessage={textmessage} settextmessage={settextmessage} />
       </Box>
  )
}
