import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";

export default function Profile() {
  const selector = useSelector((state) => state.LoginuserSlice.data);
  // console.log(selector.data.data.picture);
  return (
   
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "250px",
        }}
      >
        <img
          style={{ borderRadius: "100%", width: "200px" }}
          src={selector.data.data.picture}
          alt=""
          srcset=""
        />
      </Box>
      <Box
        sx={{
          height: "50px",
          backgroundColor: "#fff",
          padding: "10px 20px 9px 20px",
        }}
      >
        <Typography
          sx={{ fontSize: "14px", marginBottom: "10px", color: "#128C7E" }}
        >
          Your name
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "#878785",
          }}
        >
          <Typography>
            {selector.data.data.given_name} {selector.data.data.family_name}
          </Typography>
          <CreateIcon />
        </Box>
      </Box>
      <Box sx={{ height: "40px", padding: "30px 25px 30px 25px",   color: "#878785"  }}>
   
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts
       
      </Box>
      <Box
        sx={{
          height: "50px",
          backgroundColor: "#fff",
          padding: "10px 20px 9px 20px",
        }}
      >
        <Typography
          sx={{ fontSize: "14px", marginBottom: "10px", color: "#128C7E" }}
        >
          About
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "#878785",
          }}
        >
 
           This About Section  cound not provided by google 
      
          <CreateIcon />
        </Box>
      </Box>
    </Box>
  );
}
