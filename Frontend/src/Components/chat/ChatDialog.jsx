import { Box} from "@mui/material";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Menu from "./Menu/Menu";
import EmptyChat from "./EmptyChat";
import ConversationList from "./Menu/ConversationList";
import ChatBox from "./ChatBox";
import { useSelector } from "react-redux";


export default function ChatDialog() {
  const selector=useSelector(state=>state.allSlices.data)
  const[search,setsearch]=useState("")
  const[activeuser,setactiveuser]=useState([])
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
               <Menu search={search} setsearch={setsearch}/>
                      

                      <ConversationList activeuser={activeuser} setactiveuser={setactiveuser} search={search} setsearch={setsearch}/>



           </Box>


            <Box sx={{minWidth:"73%",minWidth:"300px"}}>
 {selector.length==0?<EmptyChat/>:<ChatBox activeuser={activeuser} setactiveuser={setactiveuser}/> }
                
               
            </Box>

      </Box>
    </Dialog>
  );
}
