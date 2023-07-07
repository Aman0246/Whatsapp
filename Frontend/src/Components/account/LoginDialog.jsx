import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import styled from '@emotion/styled';
export default function LoginDialog() {

const Listitems=styled(List)({
    "&>li":{
        padding: 0,
        marginTop:"15px",
        fontSize:"18px",
        lineHeight:"28px",
        color:"#4a4a4a"
    }

})



  return (
    <Dialog PaperProps={{sx:{height:"80%",marginTop:"5%",width:"60%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none"}}}   open={true}>


<Box >

        <Box sx={{display:"flex"}}>
            <Box sx={{padding:"56px 0 56px 56px"}} >
            <Typography sx={{fontSize:"26px",color:" #BEBEBE",marginBottom:"25px"}}>To use WhatsApp on your Computer</Typography>
            <Listitems >
                <ListItem>1. Open WhatsApp on Your Computer</ListItem>
                <ListItem>2. Tap Menu Setting and select WhatsApp Web</ListItem>
                <ListItem>3. Tap Menu Setting and select WhatsApp Web</ListItem>
            </Listitems>
            </Box>
            <Box>
           <img style={{width:264, height:264, margin:"56px 0 0 100px"}} src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" alt="" srcset="" />
            </Box>
        </Box>

</Box>


        </Dialog>
  )
}
