import React from 'react'
import {Box, Paper, Rating, Typography} from "@mui/material"
import MovieCover from './MovieCover';
import StarIcon from "@mui/icons-material/Star";

function MainInfos({poster,title,overview,rating}) {
  return (
    <Paper
      sx={{
        mt: { xs: 10, md: 0 },
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
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          p: 1,
          alignSelf: "center",
        }}>
        <Typography variant='h4' sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant='p'>{overview}</Typography>
        <Box sx={{ mt: 3 }}>
          <Typography>Rating :</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
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
  );
}

export default MainInfos