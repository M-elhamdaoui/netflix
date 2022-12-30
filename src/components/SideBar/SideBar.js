import React from 'react';
import {Box , Drawer ,Toolbar,Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import {useTheme} from "@mui/material/styles"
import { useColorMode } from '../../context/useTheme';


export default function SideBar(props) {
  const { window } = props;
  const theme=useTheme();
  const colorMode=useColorMode();



  const drawer = (
    <div>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <List>
          <ListItem>
            <ListItemButton onClick={colorMode.toggleColorMode}>
              <ListItemIcon>
                {theme.palette.mode === "light" ? (
                  <LightModeIcon />
                ) : (
                  <NightlightIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={theme.palette.mode.toUpperCase()} />
            </ListItemButton>
          </ListItem>
        </List>
      </Toolbar>
      <Divider />
      <List>
        {["Favorite", "Action", "Drama", "Science fiction "].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
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
            <ListItemButton>
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
