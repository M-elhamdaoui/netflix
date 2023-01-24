import { Box,Paper,Typography,Rating } from '@mui/material'
import React from 'react'
import "./style.css"
import MovieCover from '../MovieCover';
import StarIcon from "@mui/icons-material/Star";

function MoviePoster({background,title,overview,poster,rating}) {
  return (
    <Box
      sx={{
        width: "100%",
        height: {xs:"100%",md:"91.6vh"},
        backgroundImage: ` url(
          "https://image.tmdb.org/t/p/original${background}"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}>
      <div className='overlay'>
        <Paper
          sx={{
            mt: { xs: 15, md: 0 },
            width: { xs: "100%", md: "50%" },
            p: 2,
            borderRadius: "20px",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: { xs: "column", md: "row" },
          }}>
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              overflow: "hidden",
              borderRadius: "40px",
              p: 1,
            }}>
            <MovieCover image={poster} title={title} />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%" }, p: 1 ,alignSelf:"center"}}>
            <Typography variant='h4' sx={{ mb: 1 }}>
              {title}
            </Typography>
            <Typography variant='p'>{overview}</Typography>
            <Box sx={{ display: "flex", alignItems: "center" ,mt:3}}>
              {rating && (
                <Rating
                  name='movie-feedback'
                  max={10}
                  value={rating}
                  readOnly
                  precision={0.1}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
                  }
                />
              )}
              {rating && <Box sx={{ ml: 2 }}>{rating}</Box>}
            </Box>
          </Box>
        </Paper>
      </div>
    </Box>
  );
}

export default MoviePoster