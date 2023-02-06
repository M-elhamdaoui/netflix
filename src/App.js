import React from 'react';
import './App.css';
import {Routes ,Route,Navigate} from "react-router-dom"
import Home from './pages/Home';
import {useUserContext} from "./context/userContext"
import Greeting from './pages/Greeting';
import { CircularProgress } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {ColorModeProvider} from "./context/useTheme"
import MovieDetails from './pages/MovieDetails';
import Section from './pages/Section';




function App() {
  const { user, authIsReady ,modeIsReady } = useUserContext();
 
    return (
      <ColorModeProvider >
        <CssBaseline />
        {(!authIsReady || !modeIsReady ) && (
          <div className='App'>
            <CircularProgress />
          </div>
        )}
        {(authIsReady && modeIsReady ) && (
          <Routes>
            <Route path='/' element={user?<Navigate to="/home" />:<Home/>} />
            {user && <Route path='/:path' element={ <Greeting />} />}
            {user && <Route path='/movies/:id' element={<MovieDetails/>} />}
            
          </Routes>
        )}
      </ColorModeProvider>
    );
  
  
}

export default App;
