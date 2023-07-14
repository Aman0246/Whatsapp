import React from 'react'
import Box from '@mui/material/Box';
import { Typography, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux'
export default function ChatHadder({activeuser}) {
    const selector=useSelector(state=>state.allSlices.data[0])
 

   
  return (
   <Box sx={{display:"flex",background:"#ededed",minWidth:"970px",padding:"5px 16px",alignItems:"center",justifyContent:"space-between"}}> 
   <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>

    <img style={{width:"40px",height:"40px",borderRadius:"50%"}} src={selector.picture} alt="Dp"/>
    <Box>


        <Typography>{selector.given_name}{" "}{selector.family_name}</Typography>
        <Typography >{activeuser?.some(user=>user?._id===selector._id)?<span style={{color:"green"}}>online</span>:<span style={{color:"red"}}>offline</span>}</Typography>
    </Box>
   </Box>
    
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <SearchIcon sx={{marginRight:"10px"}}></SearchIcon>
        <MoreVertIcon></MoreVertIcon>
    </Box>

   </Box>
  )
}
