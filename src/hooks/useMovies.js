import {  useEffect, useState } from "react";
import axios from "axios"

const baseUrl = "https://api.themoviedb.org/3";
const key=process.env.REACT_APP_API_KEY;

export const useMovies=(action)=>{
    const [error,setError]=useState();
    const [isPending,setIsPending]=useState(false);
    const [data, setData]=useState([])

    useEffect(()=>{
        setError(null);
        setIsPending(true);
        if(action=="getAll"){
            axios
              .get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
              )
              .then((resp) => {
                setData([...resp.data.results]);
                setIsPending(false);
              })
              .catch((err) => {
                setError(err.message)
                setIsPending(false);
            });
        }
    },[action])

    return {error,isPending,data};
}