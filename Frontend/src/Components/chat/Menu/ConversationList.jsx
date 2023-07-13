import React, { useEffect, useState } from 'react'
import axios from "axios"
import ConversationParticular from './ConversationParticular'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { io } from 'socket.io-client'


export default function ConversationList({search,setactiveuser,activeuser}) {
  let selector=useSelector(state=>state)
  let dispatch=useDispatch()
  let logineduser=selector.LoginuserSlice.data[0]

  let socket;
  //=======================================================================
  const [user,setuser]=useState([])
  const ENDPOINT="http://localhost:7000";
  useEffect(()=>{
    socket=io(ENDPOINT)
    //logined user
    socket.emit("adduser",(logineduser))
    socket.on("getuser",(users)=>{
     console.log(users)
      setactiveuser(users)
    
      
  })
  },[logineduser])

  
  //-------------------------------------------------------------------

useEffect(()=>{

  const getuser=async()=>{
    await axios.get("/alluser").then((userdata)=>{
      const filterData=userdata.data.data.filter(user=>user.given_name.toLowerCase().includes(search.toLowerCase()))
      console.log(filterData)
      // setuser(userdata.data.data)
      setuser(filterData)
     })
  }
  getuser()

},[search])


//-------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------






let LocalId=localStorage.getItem("id")
  return (
  

    <Box sx={{height:"80vh",overflowY:"scroll"}}>
           {user.map(e=>(
             e._id!=LocalId&& <ConversationParticular user={e}/>
             ))}
          


    </Box>
          
  )
}

// alluser
