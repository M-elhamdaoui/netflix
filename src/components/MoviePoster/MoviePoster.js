import { Box} from '@mui/material'
import React,{useEffect,useState} from 'react'
import "./style.css"
import MainInfos from '../MainInfos';
import axios from 'axios';
import Actors from "../Actors"

function MoviePoster({movie}) {
  const [credits,setCredits]=useState(null);
  
  useEffect(()=>{
      axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      ).then(res=>{
        setCredits(res.data)
      });
  },[movie])
  useEffect(()=>{
    console.log(credits)
  },[credits])
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "100%", md: "91.6vh" },
        backgroundImage: ` url(
          "https://image.tmdb.org/t/p/original${movie.backdrop_path}"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}>
      <div className='overlay'>
        <MainInfos
          title={movie.title}
          overview={movie.overview}
          poster={movie.poster_path}
          rating={movie.vote_average}
        />
        {credits && <Actors casts={credits?.cast} />}
      </div>
    </Box>
  );
}

export default MoviePoster