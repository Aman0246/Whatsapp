import React, { useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from '@mui/material';
import { LogoutUser } from '../../../ReduxToolkit/LoginUser';
import { useDispatch } from 'react-redux';

export default function HeaderMenu() {
  const dispatch=useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);

      };
    const handleLogout = () => {
      localStorage.clear("id")
      dispatch(LogoutUser())
        setAnchorEl(null);

      };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
  return (
    <Box>
      <MoreVertIcon onClick={handleClick}/>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
            anchorOrigin={{
                vertical:"bottom",
                horizontal:"center"
            }}
         transformOrigin={{
             vertical:"top",
         horizontal:"right",
         }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{fontSize:"14px",padding:"15px 60px 5px 24px",color:"#4a4a4a"}} onClick={handleClose}>Profile</MenuItem>
        <MenuItem sx={{fontSize:"14px",padding:"15px 60px 5px 24px",color:"#4a4a4a"}}  onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  )
}
