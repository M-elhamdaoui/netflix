import React, { useEffect } from 'react';
import {Box , Drawer ,Toolbar,Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import {useTheme} from "@mui/material/styles"
import { useUpdateDoc } from '../../hooks/useUpdateDoc';
import {useUserContext} from "../../context/userContext"

// icons 
import HomeIcon from "@mui/icons-material/Home"; // Home icon
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied"; // Drama
import FavoriteIcon from "@mui/icons-material/Favorite";// favorite



export default function SideBar(props) {
  const { window } = props;
  const theme=useTheme();
  const { DOC, dispatch } = useUserContext();
  const {updateDocByID,pending}=useUpdateDoc()
  

  const toggleColor=(id)=>{
    updateDocByID(id,"mod",theme.palette.mode==="light"?"dark":"light");
  }

  useEffect(()=>{
   if(pending){
    dispatch( {type:"LOADING"})
   }else{
    dispatch({type:"LOADMOD"})
   }
  },[pending,dispatch])

  let drawer = (
    <div>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <List>
          <ListItem>
            {DOC && (
              <ListItemButton onClick={() => toggleColor(DOC.id)}>
                <ListItemIcon>
                  {theme.palette.mode === "light" ? (
                    <LightModeIcon />
                  ) : (
                    <NightlightIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={theme.palette.mode.toUpperCase()} />
              </ListItemButton>
            )}
          </ListItem>
        </List>
      </Toolbar>
      <Divider />
      <List>
        {["Home", "Favorite", "Action", "Drama", "Science fiction "].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  backgroundColor:
                    props.page === text ? "rgba(25, 118, 210, 0.4)" : "",
                }}
                onClick={() => props.setPage(text)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
                
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Comedy", "Fantasy", "Adventure"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                backgroundColor:
                  props.page === text ? "rgba(25, 118, 210, 0.4)" : "",
              }}
              onClick={() => props.setPage(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
    
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component='nav'
      sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label='mailbox folders'>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant='temporary'
        open={props.mobileOpen}
        onClose={()=>props.handleDrawerToggle()}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: props.drawerWidth },
        }}>
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: props.drawerWidth },
        }}
        open>
        {drawer}
      </Drawer>
    </Box>
  );
};
