import { Box } from '@mui/material'
import React ,{useEffect} from 'react'
import Loading from '../Loading/Loading';
import Movies from '../Movies/Movies';
import  {useMovies} from "../../hooks/useMovies"

function Container({drawerWidth}) {
  let {data,isPending} = useMovies("getAll");
 useEffect(()=>{
console.log(data)
 },[data])
  
  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
        ml:2,
        p: 3,
        mt:8,
        width:"100%" ,
      }}>
        {isPending && <Loading/>}
      {!isPending && data && <Movies data={data} />}
    </Box>
  );
}

export default Container