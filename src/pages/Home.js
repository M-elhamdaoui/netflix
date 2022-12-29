import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup';
import {Container,Box,Button} from "@mui/material";
import "./Home.css";
import background from "../assets/images/BG.jpg"

function Home() {
  const [form,setForm]=useState("Login");
  const toggle=()=>{
    setForm((last)=>last==="Login"?"Signup":"Login")
  }
  return (
    <Container component='main' maxWidth='xs' >
      <img src={background} className='Bg' />
      <div className='background' ></div>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        {form==="Login"?<Login/>:<Signup/>}
      </Box>{" "}
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}>
        <Button sx={{color:"white"}}  onClick={toggle} >You want to {form==="Signup"?"Login":"Signup"} ?</Button>
      </Box>
    </Container>
  );
}

export default Home