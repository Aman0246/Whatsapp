import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';
import LoginDialog from './account/LoginDialog';

export default function Messanger() {

  return (<>
    <Box sx={{background:"#d3d3d3",height:"100vh"}}>
    <AppBar sx={{backgroundColor:"#128C7E", height:"250px",boxShadow:"none"}}>
        <Toolbar></Toolbar>
    </AppBar>
     <LoginDialog></LoginDialog>
    </Box>
  </>
  )
}
