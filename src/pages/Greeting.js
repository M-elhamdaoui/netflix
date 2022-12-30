import React ,{useState} from 'react'
import {Box , CssBaseline} from "@mui/material";
import Header from '../components/Header/Header';
import SideBar from "../components/SideBar/SideBar"
const drawerWidth=240;

function Greeting() {
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
    </Box>
  );
}

export default Greeting