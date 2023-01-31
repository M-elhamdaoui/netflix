import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { Grid } from "@mui/material";
import MoviePoster from "../components/MoviePoster/MoviePoster";
import { Box } from "@mui/system";
import { useUserContext } from "../context/userContext";
import { useColorMode } from "../context/useTheme";


const key = process.env.REACT_APP_API_KEY;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [userLikes,setUserLikes]=useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { DOC } = useUserContext();
  const { loadMode } = useColorMode();
  useEffect(() => {
    if (DOC) {
      loadMode(DOC.mod);
    }
  }, [DOC, loadMode]);
  
  useEffect(() => {
    if (DOC) {
      setUserLikes([...DOC.likes])
    }
  }, [DOC]);
  useEffect(() => {
    console.log(userLikes)
  }, [userLikes]);
  const addMovie = ()=>{
    
  }
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
      return ()=>{
        window.scrollTo(0, 0);
      }
  }, [id]);
  return (
    <Box sx={{ display: "flex" }}>
      <Header back={true} />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          mt: 7,
          width: "100%",
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {movie && !isLoading && <MoviePoster movie={movie} />}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MovieDetails;
