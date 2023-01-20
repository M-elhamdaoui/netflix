import { Box } from '@mui/material'
import React from 'react'
import "./style.css"
import MovieCover from '../MovieCover';

function MoviePoster({background,title,overview,poster}) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        overflow: "hidden",
        position: "relative",
      }}>
      <Box
        className='title_overview'
        sx={{ pl: 3, width: { sx: "100%", md: "50%" }, mb: 5 }}>
        <Box
          className='movie'
          sx={{
            width: { xs: "90%", lg: "40%" },

            borderRadius: "80px",
            overflow: "hidden",
            ml: { xs: "0px", lg: "60px" },
            display: { xs: "none", md: "block" },
          }}>
          <MovieCover image={poster} title={title} />
        </Box>
        <Box>
          <h2 className='title1'>{title}</h2>
          <p>{overview?.slice(0, 200)}...</p>
        </Box>
      </Box>
      <div className='overlay'></div>
      <img
        src={`https://image.tmdb.org/t/p/original${background}`}
        alt='movie'
        className='background'
      />
    </Box>
  );
}

export default MoviePoster