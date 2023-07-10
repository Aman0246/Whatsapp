import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

// WhatsApp Chat Background Image used in component Messages.jsx
// https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png


export default function Message() {

    const Wrapper =styled(Box)({
        backgroundImage:'url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)'
      ,
      height:"79vh",width:"100%",overflowY:"scroll"
    })
  return (
    <Wrapper>
      a
    </Wrapper>
    
  )
}
 
