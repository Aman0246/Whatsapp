import { Box, Paper, colors } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

export default function Search() {
  return (
    <Box
      sx={{
        background: "#fff",
        height: "45px",
        alignItems: "center",
        borderBottom: "3px solid #f2f2f2",
        display: "flex",
        padding: "0px 13px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "30px",
          backgroundColor: "#f0f2f5",
          display: "flex",
          alignItems: "center",
          width:"100%"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            padding: "8px",
            color: "#919191",
          }}
        >
          <SearchIcon />
        </Box>
        <InputBase
          sx={{
            borderRadius:"20px",
            width: "100%",
            height: "15px",
            paddingLeft: "60px",
          }}
          placeholder="Search or Start New Chat"
        />
      </Box>
    </Box>
  );
}
