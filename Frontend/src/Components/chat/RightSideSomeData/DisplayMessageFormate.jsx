import { Box, Typography } from '@mui/material'
import React from 'react'

export default function DisplayMessageFormate({ e }) {

    const dateFormate=(date)=>{
        const hours=new Date(date).getHours();
        const minutes=new Date(date).getMinutes();
        return `${hours<10?'0'+hours:hours}:${minutes<10?'0'+minutes:minutes}`
    }
let senderidFromLocal=localStorage.getItem("id")
    return (
        <>
        {senderidFromLocal==e.senderId?
        <Box>
            <Box sx={{ backgroundColor: "#dcf8c6",marginTop:"10px", maxWidth: "60%", marginLeft: "auto", padding: "5px", width: "fit-content", display: 'flex',alignItems:"baseline" ,wordBreak: "break-word", borderRadius: "20px" }}>
                <Typography>{e.text}</Typography>
                <Typography sx={{fontSize:"10px",color:"#919191",paddingLeft:"10px"}}>{dateFormate(e.createdAt)}</Typography>
            </Box>
        </Box>
        :
        <Box sx={{paddingLeft:"10px"}}>
            <Box sx={{ backgroundColor: "#ffffff",marginTop:"10px", maxWidth: "60%", padding: "5px", width: "fit-content", display: 'flex',alignItems:"baseline" ,wordBreak: "break-word", borderRadius: "20px" }}>
                <Typography>{e.text}</Typography>
                <Typography sx={{fontSize:"10px",color:"#919191",paddingLeft:"10px"}}>{dateFormate(e.createdAt)}</Typography>
            </Box>
        </Box>
}
        </>
    )
}
