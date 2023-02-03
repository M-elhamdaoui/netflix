import { Box } from '@mui/material'
import React from 'react'

function Favorite() {
  return (
      <Box
      component='main'
      sx={{
        flexGrow: 1,
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
        ml:2,
        p: 3,
        mt:8,
        width:"100%" ,
      }}>Favorite</Box>
  )
}

export default Favorite