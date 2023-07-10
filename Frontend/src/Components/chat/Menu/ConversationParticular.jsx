import { Box } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { SelectedUser } from '../../../ReduxToolkit/sliceses';
import axios from 'axios'

export default function ConversationParticular({user}) {
  const dispatch=useDispatch()
  const selector=useSelector(state=>state)
  
  const handleClick=async()=>{
    let c=localStorage.getItem("id")
    dispatch(SelectedUser(user))
    await  axios.post("/conversation/add",{senderId:c,receiverId:selector.allSlices.data[0]._id}).then((data)=>{
      console.log(data)
    })
}

  return (
    <Box onClick={handleClick} >
    <Box sx={{display:"flex",margin:"10px 0px"}}>
      <Box>
       <img style={{height:"50px", width:"50px", borderRadius:"60%",padding:"0 14px"}} src={user.picture} alt="" srcset="" />
      </Box>
      <Box>{user.given_name}{" "}{user.family_name}</Box>
     
    </Box>
    <Divider sx={{backgroundColor:"#e9edef",margin:"0 30px 0 60px",opacity:".6"}}/>
    </Box>
  )
}
