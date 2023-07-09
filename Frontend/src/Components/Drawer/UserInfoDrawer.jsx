import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import Drawer from "@mui/material/Drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Profile from "./Profile";

export default function UserInfoDrawer({ openDarawer, setopenDarawer }) {
    
  return (
    <Drawer
      PaperProps={{
        sx: { marginLeft: "30px", top: "17px", height: "95%", width: "452px" },
      }}
      style={{ zIndex: 1600 }}
      open={openDarawer}>
      <Box sx={{backgroundColor:"#008069" ,height:"107px",color:"#fff",display:"flex",justifyContent:"flexStart",alignItems:"center"}}>
        <IconButton sx={{color:"#fff",marginLeft:"20px",marginRight:"30px"}}>
        <ArrowBackIcon onClick={()=>{setopenDarawer(false)}} />
        </IconButton>

        <Typography sx={{fontWeight:"600"}}>Profile</Typography>
      </Box>



      <Box sx={{backgroundColor:"#ededed",height:"84%"}}>
          
          <Profile/>



      </Box>
    </Drawer>
  );
}
