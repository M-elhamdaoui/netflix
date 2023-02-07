import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';
import { useMovies } from '../../hooks/useMovies'
import { useUpdateDoc } from '../../hooks/useUpdateDoc';
import MovieCover from '../MovieCover';

function Favorite() {

   const {updateDocByID,pending}=useUpdateDoc();
  const { DOC } = useUserContext();

  const {data} = useMovies("getFav");
  useEffect(()=>{
    console.log(data);
  },[data])
  return  (
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
      }}>
        <Grid Grid container spacing={2} >
          <Grid item xs={12} >
              <Typography variant='h5' sx={{fontWeight:"bold"}} >Your Favorite Movies </Typography>
          </Grid>
              {
             data.map(elem=>{
                 return (
                      <Grid   key={elem.id} item xs={12} md={3} >
                    <Box >
                       <Link to={`/movies/${elem.id}`}>
                      <MovieCover image={elem.poster_path} title={elem.title} />
                    </Link>
                    </Box>
                   
                  </Grid>
                
                );
              })
            }
        </Grid>
      </Box>
  )
}

export default Favorite