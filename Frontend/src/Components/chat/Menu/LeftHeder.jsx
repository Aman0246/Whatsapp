import { Box } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChatIcon from "@mui/icons-material/Chat";

import IconButton from "@mui/material/IconButton";
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import HeaderMenu from "./HeaderMenu";
import UserInfoDrawer from "../../Drawer/UserInfoDrawer";

export default function LeftHeder() {
  let selecter = useSelector((state) => state.LoginuserSlice.data);
  // console.log(selecter.picture);
  const[openDarawer,setopenDarawer]=useState(true)
  return (
    <Box
      sx={{
        height: "44px",
        background: "#ededed",
        padding: "8px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img onClick={()=>setopenDarawer(!openDarawer)}
        style={{ height: "40px", width: "40px", borderRadius: "50%" }}
        src={selecter.picture}
        alt="userDp"
      />
      <Box>
        <IconButton style={{ marginRight: "10px" }}>
          <DataSaverOffIcon  />
        </IconButton>
        <IconButton style={{ marginRight: "10px" }}>
          <ChatIcon  />
        </IconButton>
        <IconButton>
            <HeaderMenu/>
        </IconButton>
        <UserInfoDrawer openDarawer={openDarawer} setopenDarawer={setopenDarawer}/>

      </Box>
    </Box>
  );
}
