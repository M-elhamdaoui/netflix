import React, { useEffect,useState } from 'react'
import axios from "axios";
import {Box,Paper} from "@mui/material";
import MovieCover from '../MovieCover';
import { Link } from 'react-router-dom';

const key = process.env.REACT_APP_API_KEY

function Similar({ id }) {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US&page=1`
        ).then(res=>setData(res.data.results));
    },[id])

    useEffect(()=>{
        console.log(data)
    },[data])
  return (
    <Box
      sx={{
        display: "flex",
        p: 1,
        overflowX: "scroll",
        width: "100%",
        "-ms-overflow-style": "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}>
      {data.map((elem) => {
        return (
          <Box key={elem.id}>
            <Link to={`/movies/${elem.id}`}>
              <Paper
                sx={{
                  width: { xs: "85vw", md: "250px" },
                  overflow: "hidden",
                  borderRadius: "5px",
                  mr: 1,
                }}>
                <Box>
                  <MovieCover
                    image={elem.poster_path}
                    title={elem.original_title}
                  />
                </Box>
              </Paper>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}

export default Similar