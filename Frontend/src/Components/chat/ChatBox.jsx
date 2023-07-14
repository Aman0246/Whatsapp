import React, { useState } from 'react'
import ChatHadder from './RightSideSomeData/ChatHadder'
import Box from '@mui/material/Box';
import Message from './RightSideSomeData/Message';
import FooterRight from './RightSideSomeData/FooterRight';

export default function ChatBox({activeuser,setactiveuser}) {
  const[textmessage,settextmessage]=useState("")
  const[DBchat,setDBchat]=useState("")
  const[file,setFile]=useState([])
  const[incommingMessage,setincommingMessage]=useState(null)
  return (
    <Box sx={{width:"100%"}}>
      <ChatHadder activeuser={activeuser} setactiveuser={setactiveuser} />
      <Message DBchat={DBchat} incommingMessage={incommingMessage} textmessage={textmessage} setDBchat={setDBchat} />
      <FooterRight file={file} incommingMessage={incommingMessage} setincommingMessage={setincommingMessage} setFile={setFile} DBchat={DBchat} setDBchat={setDBchat}   textmessage={textmessage} settextmessage={settextmessage} />
       </Box>
  )
}
