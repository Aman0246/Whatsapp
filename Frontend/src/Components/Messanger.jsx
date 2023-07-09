import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";
import { useSelector } from "react-redux";

export default function Messanger() {
  let selector = useSelector((state) => state);
  // console.log(selector);

  return (
    <>
      <Box sx={{ background: "#d3d3d3", height: "100vh" }}>
        <AppBar
          sx={{
            backgroundColor: "#128C7E",
            height:
              selector.LoginuserSlice.data.length != 0 ? "125px" : "250px",
            boxShadow: "none",
          }}
        >
          <Toolbar></Toolbar>
        </AppBar>
        {selector.LoginuserSlice.data.length != 0 ? (
          <ChatDialog />
        ) : (
          <LoginDialog />
        )}
      </Box>
    </>
  );
}
