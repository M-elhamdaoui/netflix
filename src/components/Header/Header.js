import React, { useEffect } from 'react'
import { styled,alpha } from '@mui/material/styles';
import {AppBar , Toolbar,IconButton,InputBase,Box,Menu,MenuItem,Typography} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle  from '@mui/icons-material/AccountCircle';
import MoreIcon from "@mui/icons-material/MoreVert"
import {useLogout} from "../../hooks/useLogout"
import { useUserContext } from '../../context/userContext';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Header({ drawerWidth, handleDrawerToggle ,back }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const {user} = useUserContext();
    const navigate=useNavigate();


    const {logout}=useLogout();

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
    useEffect(()=>{
      if(!user){
        navigate("/")
      }
    },[user])


        const menuId = "primary-search-account-menu";
        const renderMenu = (
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}>
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
          </Menu>
        );

        const mobileMenuId = "primary-search-account-menu-mobile";
        const renderMobileMenu = (
          <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            <MenuItem onClick={() => logout()}>
              <p>Logout</p>
            </MenuItem>
          </Menu>
        );

  return user && (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        <Toolbar>
          {!back && (
            <IconButton
              color='inhert'
              area-label='open drawer'
              edge='start'
              onClick={() => handleDrawerToggle()}
              sx={{ mr: 2, display: { sm: "none" } }}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          )}
          {back && (
            
              <IconButton
              onClick={()=>navigate(-1)}
                color='inhert'
                area-label='open drawer'
                edge='start'
                sx={{ mr: 2 }}>
                <ArrowBackIcon sx={{ color: "white" }} />
              </IconButton>
           
          )}
        <Link to="/" style={{textDecoration:"none",color:"red"}} >
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: { sm: "block" },fontWeight:"bold", mr: "60px" }}>
            NETFLIX
          </Typography>
        </Link>
          <Search xs={{ marginLeft: "200px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography>{user.email}</Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'>
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'>
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

export default Header