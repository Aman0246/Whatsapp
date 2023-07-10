import { Box } from '@mui/material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InputBase from '@mui/material/InputBase';
import React from 'react'

export default function FooterRight() {
    return (
        <Box sx={{ height: "8vh", background: "#ededed" ,display:"flex",justifyContent:"space-between",padding:"0 20px",alignItems:"center"}}>
            <Box sx={{display:"flex",gap:"20px",justifyContent:"center",alignItems:"center"}}>
                <SentimentSatisfiedAltIcon />
                <AttachFileIcon/>
                <InputBase sx={{background:"#fff",width:"845px",borderRadius:"10px",padding:"0 20px"}}  placeholder='Type a message'/>
            </Box>
       
            <Box>
                <KeyboardVoiceIcon />
            </Box>
        </Box>
    )
}
