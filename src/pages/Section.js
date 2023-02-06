import React, { useState, useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import { useUserContext } from "../context/userContext";
import { useColorMode } from "../context/useTheme";
import { useParams } from "react-router-dom";


// sections :
const drawerWidth = 240;

function Section() {
   const { path } = useParams();
  const { DOC } = useUserContext();
  const { loadMode } = useColorMode();
  useEffect(() => {
    if (DOC) {
      loadMode(DOC.mod);
    }
  }, [DOC, loadMode]);

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        back={false}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <SideBar
        page={path}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
    </Box>
  );
}

export default Section;
