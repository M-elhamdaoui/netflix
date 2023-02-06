import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useMovies } from '../../hooks/useMovies'
import MovieCover from '../MovieCover';

function CategorieSec({cate}) {
  const {data} = useMovies(cate);
  useEffect(()=>{
    console.log(data);
  },[data])
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
      }}>
         <Grid Grid container spacing={2} >
          <Grid xs={12} >
              <Typography variant='h5' sx={{fontWeight:"bold"}} >{cate} Movies </Typography>
          </Grid>
          {
            data.map(elem=>{
              return (<Grid item xs={12} md={3} key={elem.id}>
                    <Link to={`/movies/${elem.id}`}>
                      <MovieCover image={elem.poster_path} title={elem.title} />
                    </Link>
                  </Grid>)
            })
          }
          </Grid>
      </Box>
  )
}

export default CategorieSec