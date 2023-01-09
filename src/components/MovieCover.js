import React from 'react'
import {Paper} from "@mui/material"
import { Box } from '@mui/system';

function MovieCover({image ,title}) {
  return (
    <Paper
      sx={{
        height: { xs: "90vh", md: "55vh" },
        width: "100%",
        overflow: "hidden",
        color:"white"
      }}>
      <div className='container1'>
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt='Movie'
          className='big-cover'
        />
        <Box className='desc1' sx={{ p: 1, width:"80%" }}>
          <h4>{title}</h4>
        </Box>
        <div className='black-effect' style={{opacity:"0.4"}}></div>
      </div>
    </Paper>
  );
}

export default MovieCover