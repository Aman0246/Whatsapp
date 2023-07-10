import { Box } from '@mui/material'
import React, { useState } from 'react'
import LeftHeder from './LeftHeder'
import Search from './Search'

export default function Menu({search,setsearch}) {

  return (
    <>
   <LeftHeder/>
   <Search search={search} setsearch={setsearch}/>
    </>
  )
}
