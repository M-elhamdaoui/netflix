import React from 'react';
import './App.css';
import {Routes ,Route} from "react-router-dom"
import Home from './pages/Home';
import {useUserContext} from "./context/userContext"
import Greeting from './pages/Greeting';
import { CircularProgress } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {ColorModeProvider} from "./context/useTheme"



function App() {
  const { user, authIsReady } = useUserContext();
  

    return (
      <ColorModeProvider >
        <CssBaseline />
        {!authIsReady && (
          <div className='App'>
            <CircularProgress />
          </div>
        )}
        {authIsReady && (
          <Routes>
            <Route path='/' element={user ? <Greeting /> : <Home />} />
          </Routes>
        )}
      </ColorModeProvider>
    );
  
  
}

export default App;
