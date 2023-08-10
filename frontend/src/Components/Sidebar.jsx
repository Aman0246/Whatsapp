import { Box, IconButton } from '@mui/material'
import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import UserCard from './UserCard';
export default function Sidebar() {
  return (
    <Box sx={{ flex: 0.3,display:'flex',flexDirection:'column' }} className="bg-blue-100 rounded-xl" >
      <Box sx={{ display: 'flex', backgroundColor: 'white', borderRadius: '15px', padding: "8px 5px", margin: '10px', justifyContent: 'space-between' }}>

        <IconButton><AccountCircleOutlinedIcon /></IconButton>
        <Box>
          <IconButton><PersonAddAlt1OutlinedIcon /></IconButton>
          <IconButton><GroupAddOutlinedIcon /></IconButton>
          <IconButton><AddCircleOutlineOutlinedIcon /></IconButton>
          <IconButton><NightlightOutlinedIcon /></IconButton>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', backgroundColor: 'white', borderRadius: '15px', padding: "8px 5px", margin: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <input style={{ outline: 'none', flex: 1, padding: '0 6px', paddingRight: '30px' }} placeholder='Search'></input>
      </Box>
      <Box>
      </Box>
      <Box sx={{flex:'80%',overflowY:'scroll',background:'#fcf7f7',flexDirection:'column',display:'flex'}}>
     <UserCard/>
     <UserCard/>
     <UserCard/>
     <UserCard/>
     <UserCard/>
     <UserCard/>
     <UserCard/>
     <UserCard/>
     <UserCard/>
     <UserCard/>
     <UserCard/>  
      </Box>
   </Box>
  )
}
