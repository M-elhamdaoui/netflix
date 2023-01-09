import { Box } from '@mui/material';
import React from 'react'
import "../styles/cover.css"

function Cover({title,image,desc}) {
  return (
    <Box
      className='cover'
      sx={{
        width: "100%",
        mL:1
        ,
        mb: 2,
        height: { xs: "90vh", sm: "65vh" },
        borderRadius: "30px",
        overflow: "hidden",
        position: "relative",
      }}>
      <div className='container1' >
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt='Movie'
          className='big-cover'
        />
        <Box className="desc" sx={{p:{xs:4,md:3},width:{xs:"100%",md:"50%"}}} >
          <h2>{title}</h2>
          <p>{desc}</p>
        </Box  >
        <div className='black-effect'></div>
      </div>
    </Box>
  );
}

export default Cover