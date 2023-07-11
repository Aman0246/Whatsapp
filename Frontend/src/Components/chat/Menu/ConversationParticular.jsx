import { Box } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { IdoffullChat, SelectedUser } from '../../../ReduxToolkit/sliceses';
import axios from 'axios'

export default function ConversationParticular({user}) {
  // const selector=useSelector(state=>state)
  const dispatch=useDispatch()
  

  const handleClick=async()=>{
    let c=localStorage.getItem("id")
    dispatch(SelectedUser(user))
      //  console.log(user)
      await  axios.post("/conversation/add",{senderId:c,receiverId:user._id}).then((data)=>{
        // handlEenter from FooterRight.jsx
        dispatch(IdoffullChat(data.data.data._id))
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
