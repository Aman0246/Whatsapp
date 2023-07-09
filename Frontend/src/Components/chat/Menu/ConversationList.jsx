import React, { useEffect, useState } from 'react'
import axios from "axios"
import ConversationParticular from './ConversationParticular'
import { Box } from '@mui/material'

export default function ConversationList() {

const [user,setuser]=useState([])

useEffect(()=>{

  const getuser=async()=>{
    await axios.get("/alluser").then((userdata)=>{
      setuser(userdata.data.data)
     })
  }
  getuser()

},[])

let LocalId=localStorage.getItem("id")
  return (
    <Box sx={{height:"80vh",overflow:"scroll"}}>
           {user.map(e=>(
            e._id!=LocalId&& <ConversationParticular user={e}/>
           ))}
          


    </Box>
  )
}

// alluser
