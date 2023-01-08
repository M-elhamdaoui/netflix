import { Box } from '@mui/material'
import React from 'react'
import Loading from '../Loading/Loading';

function Container({drawerWidth}) {
  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        p: 3,
        mt:8,
        width:"100%" ,
      }}>
      <Loading/>
    </Box>
  );
}

export default Container