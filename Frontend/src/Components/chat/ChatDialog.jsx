import { Box} from "@mui/material";
import React from "react";
import Dialog from "@mui/material/Dialog";
import Menu from "./Menu/Menu";
import EmptyChat from "./EmptyChat";
import ConversationList from "./Menu/ConversationList";
import ChatBox from "./ChatBox";


export default function ChatDialog() {
  return (
    <Dialog
      hideBackdrop={true}
      PaperProps={{
        sx: {
          height: "95%",
          maxHeight: "100%",
          width: "100%",
          maxWidth: "100%",
          boxShadow: "none",
          borderRadius: "0px",
        },
      }}
      open={true}
    >
      <Box sx={{display:"flex"}}>
           <Box sx={{minWidth:"450px",height:"100%",borderRight:"1px solid #dadada"}}>
               <Menu/>
                      

                      <ConversationList/>



           </Box>


            <Box sx={{minWidth:"73%",minWidth:"300px"}}>

                {/* <EmptyChat/> */}
                <ChatBox/>
            </Box>

      </Box>
    </Dialog>
  );
}
