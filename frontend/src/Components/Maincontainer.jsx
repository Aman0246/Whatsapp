import React from 'react'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'
import Sidebar from './Sidebar'
import WorkArea from './WorkArea'
export default function Maincontainer() {
    const Maincontainer = styled(Box)({
  backgroundColor:'#f4f5f8',
  height:'90vh'
  ,width:'90%',
  display: "flex",
  borderRadius:'20px',
  backgroundColor:'aliceblue'

    })
    
  return (
    <Maincontainer>
      <Sidebar />
      <WorkArea />
    </Maincontainer>
  )
}
