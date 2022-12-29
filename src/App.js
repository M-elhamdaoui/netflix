import React from 'react';
import './App.css';
import {Routes ,Route} from "react-router-dom"
import Home from './pages/Home';
import {UserProvider,useUserContext} from "./context/userContext"
import Greeting from './pages/Greeting';
import { CircularProgress } from "@mui/material";

function App() {
  const { user, authIsReady } = useUserContext();

    return (
      <>
      {!authIsReady && (<div className='App' ><CircularProgress/></div>)}
      {authIsReady && (<Routes>
        <Route path="/"  element={user?<Greeting/>:<Home/>} />
      
      </Routes>)}
      
      </>);
  
  
}

export default App;
