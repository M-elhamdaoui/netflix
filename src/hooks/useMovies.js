import {  useEffect, useState } from "react";
import axios from "axios"
import { useUserContext } from "../context/userContext";
import { cate } from "../components/SideBar/categorie";
import { useNavigate } from "react-router-dom";

const key=process.env.REACT_APP_API_KEY;

export const useMovies=(action)=>{
    const [error,setError]=useState();
    const [isPending,setIsPending]=useState(null);
    const [data, setData]=useState([]);
    const {DOC}=useUserContext()
    const navigate =useNavigate();

    useEffect(()=>{
        setError(null);
        setIsPending(true);
        if(action==="getAll"){
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
        }else if(action==="getFav"  && DOC){
          console.log(DOC)
          const likes=[...DOC.likes];
        
          setData([]);
           likes.forEach(async(elem)=>{
            console.log(elem)
              const details = await axios.get(`https://api.themoviedb.org/3/movie/${elem}?api_key=${key}&language=en-US`)
                setData(prev=>[...prev,details.data])
           })
        }else if(action !=="getFav" && action !=="getAll") {
          setData([]);
          console.log(action)
          const elem = cate.find(elem=>elem.name===action);
          if(!elem){
              
              return ()=>navigate("/");
          }
          console.log(elem.id);
          axios.get(
               `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=${elem.id}`
          ).then(resp=>setData(resp.data.results))

        }

    },[action,DOC])

    return {error,isPending,data};
}