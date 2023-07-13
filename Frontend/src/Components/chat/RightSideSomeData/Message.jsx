import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import DisplayMessageFormate from './DisplayMessageFormate'

// WhatsApp Chat Background Image used in component Messages.jsx
// https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png


export default function Message({DBchat,textmessage}) {
  let last=useRef(null)
  console.log(DBchat)
  useEffect(()=>{
    last.current.scrollIntoView({transition:'smooth'})
  },[textmessage,DBchat.length])
  

    const Wrapper =styled(Box)({
        backgroundImage:'url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)'
      ,
      height:"79vh",width:"100%",overflowY:"scroll"
    })
  return (
    <Wrapper>
      {DBchat.length>0&& DBchat.map((e)=><DisplayMessageFormate e={e}/>)}
     <div ref={last}></div>
    </Wrapper>
    
  )
}
 
