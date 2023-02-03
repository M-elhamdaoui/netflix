import React ,{useState,useEffect} from 'react'
import {Box , CssBaseline} from "@mui/material";
import Header from '../components/Header/Header';
import SideBar from "../components/SideBar/SideBar";
import Container from '../components/Container/Container';
import { useUserContext } from '../context/userContext';
import { useColorMode } from "../context/useTheme";

// sections :
import Favorite from '../components/Favorite/Favorite';
const drawerWidth=240;


function Greeting() {
   const { DOC } = useUserContext();
   const { loadMode } = useColorMode();
   const [page,setPage]=useState("Home")
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
        setPage={setPage}
        page={page}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      {page==="Home"&&<Container page={page} drawerWidth={drawerWidth} />}
      {page==="Favorite"&&<Favorite  />}
    </Box>
  );
}

export default Greeting