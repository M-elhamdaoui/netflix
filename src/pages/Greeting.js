import React ,{useState,useEffect} from 'react'
import {Box , CssBaseline} from "@mui/material";
import Header from '../components/Header/Header';
import SideBar from "../components/SideBar/SideBar";
import Container from '../components/Container/Container';
import { useUserContext } from '../context/userContext';
import { useColorMode } from "../context/useTheme";
import { useParams} from "react-router-dom"

// sections :
import Favorite from '../components/Favorite/Favorite';
import CategorieSec from '../components/CategorieSec/CategorieSec';
const drawerWidth=240;


function Greeting() {
  const {path}=useParams()
   const { DOC } = useUserContext();
   const { loadMode } = useColorMode();

 

   useEffect(() => {
     if(DOC){
      loadMode(DOC.mod);
     }
   },[DOC ,loadMode]);

   const [mobileOpen, setMobileOpen] = useState(false);
   const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen);
   }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        back={false}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <SideBar
        setPage={()=>null}
        page={path}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      
      {path.toLowerCase()==="home"&&<Container page={path} drawerWidth={drawerWidth} />}
      {path.toLowerCase()==="favorite"&&<Favorite  />}
      {path.toLowerCase()!=="favorite" && path.toLowerCase()!=="home" && <CategorieSec cate={path} /> }
    </Box>
  );
}

export default Greeting 