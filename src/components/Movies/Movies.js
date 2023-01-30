import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Cover from '../Cover'
import MovieCover from '../MovieCover'

function Movies({data}) {
  return (
    <Grid container spacing={2} >
        {data.map((elem,index)=>{
          if(index===0){
            return (
              <Grid item xs={12} key={elem.id}>
                <Link to={`/movies/${elem.id}`} className='link'>
                  <Cover
                    title={elem.title}
                    image={elem.backdrop_path}
                    desc={elem.overview}
                  />
                </Link>
              </Grid>
            );
          }else{
                return (
                  <Grid item xs={12} md={3} key={elem.id}>
                    <Link to={`/movies/${elem.id}`}>
                      <MovieCover image={elem.poster_path} title={elem.title} />
                    </Link>
                  </Grid>
                );
          }
        
        })}
    </Grid>
  )
}

export default Movies