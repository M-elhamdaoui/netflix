import React ,{useState,useEffect} from 'react'
import {Box , CssBaseline} from "@mui/material";
import Header from '../components/Header/Header';
import SideBar from "../components/SideBar/SideBar";
import Container from '../components/Container/Container';
import { useUserContext } from '../context/userContext';
import { useColorMode } from "../context/useTheme";
const drawerWidth=240;


function Greeting() {
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
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <SideBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <Container drawerWidth={drawerWidth} />
    </Box>
  );
}

export default Greeting