import { Box } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';

export default function ConversationParticular({user}) {
    console.log(user)
  return (
    <>
    <Box sx={{display:"flex",margin:"10px 0px"}}>
      <Box>
       <img style={{height:"50px", width:"50px", borderRadius:"60%",padding:"0 14px"}} src={user.picture} alt="" srcset="" />
      </Box>
      <Box>{user.given_name}{" "}{user.family_name}</Box>
     
    </Box>
    <Divider sx={{backgroundColor:"#e9edef",margin:"0 30px 0 60px",opacity:".6"}}/>
    </>
  )
}
