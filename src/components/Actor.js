import React from 'react'
import {Box, Avatar, Typography} from "@mui/material"

function Actor({name,image,character}) {
  return (
    <Box sx={{display:"flex",borderRadius:"20px",width:"100%",p:1,justifyContent:"flex-start" , "&:hover":{background:"rgba(0,0,0,0.2)",cursor:"pointer"}}} >
      <Box>
        <Avatar
          alt={name}
          src={`https://image.tmdb.org/t/p/w500${image}`}
          sx={{ width: 56, height: 56 }}
        />
      </Box>
      <Box sx={{display:"flex",ml:1 ,flexDirection:"column", alignItems:"flex-start" }} >
        <Typography variant='h6' >{name}</Typography>
        <Typography variant='p'>{character}</Typography>
      </Box>
    </Box>
  );
}

export default Actor