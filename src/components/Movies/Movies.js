import { Grid } from '@mui/material'
import React from 'react'
import Cover from '../Cover'
import MovieCover from '../MovieCover'

function Movies({data}) {
  return (
    <Grid container spacing={2} >
        {data.map((elem,index)=>{
          if(index===0){
            return <Cover 
            key={elem.id}
              title={elem.title}
              image={elem.backdrop_path}
              desc={elem.overview}
            />;
          }else{
                return (
                  <Grid item xs={12}  md={3} key={elem.id} >
                    <MovieCover image={elem.poster_path} title={elem.title} />
                  </Grid>
                );
          }
        
        })}
    </Grid>
  )
}

export default Movies