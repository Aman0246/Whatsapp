import React, { useEffect, useState } from 'react'
import axios from "axios"
import ConversationParticular from './ConversationParticular'
import { Box } from '@mui/material'

export default function ConversationList({search}) {
const [user,setuser]=useState([])

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

},[search ])

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
