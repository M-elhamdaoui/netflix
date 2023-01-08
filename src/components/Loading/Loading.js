import { Skeleton ,Box ,Card } from '@mui/material'
import React from 'react'


function Loading() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "Wrap",
        justifyContent: "space-between",
      }}>
      <Card sx={{ width: "100%", mb: 2 ,height:{xs:"90vh",sm:"57vh"},borderRadius:"30px"}}>
        <Skeleton variant='rectangular' width='100%' height='100%' />
      </Card>
      <Card
        sx={{ width: "32%", mr: 1, display: { xs: "none", sm: "block" } }}
        >
        <Skeleton variant='rectangular' width='100%' height='24vh' />
      </Card>
      <Card
        sx={{ width: "32%", mr: 1, display: { xs: "none", sm: "block" } }}
        >
        <Skeleton variant='rectangular' width='100%' height='24vh' />
      </Card>
      <Card sx={{ width: "32%", display: { xs: "none", sm: "block" } }}>
        <Skeleton variant='rectangular' width='100%' height='24vh' />
      </Card>
    </Box>
  );
}

export default Loading