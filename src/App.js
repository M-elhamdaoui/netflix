import React from 'react';
import './App.css';
import {Routes ,Route} from "react-router-dom"
import Home from './pages/Home';
import {useUserContext} from "./context/userContext"
import Greeting from './pages/Greeting';
import { CircularProgress } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {ColorModeProvider} from "./context/useTheme"
import MovieDetails from './pages/MovieDetails';



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
           
            <Route path='/' element={user ? <Greeting /> : <Home />} />
            {user && <Route path='/:id' element={<MovieDetails/>} />}
          </Routes>
        )}
      </ColorModeProvider>
    );
  
  
}

export default App;
