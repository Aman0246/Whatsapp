import { Box, Typography } from '@mui/material'
import React from 'react'
const emptyChatImage = 'https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg';
export default function EmptyChat() {
  return (
    <Box sx={{height:"682px"}}>
    <Box sx={{overflow:"hidden",height:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
      <img style={{width:"50%"}} src={emptyChatImage} alt="EmptyChat"  />
      <Typography style={{fontSize:"40px",color:"#878785",marginBottom:"20px"}}>WhatsApp</Typography>
      <Typography style={{color:"#878785",marginBottom:"10px"}}>Send and receive messages without keeping your phone online.</Typography>
      <Typography style={{color:"#878785",marginBottom:"10px"}}>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Typography>
    </Box>
    </Box>
  )
}
