import { Box, Button, TextField, Paper } from "@mui/material";
import React, { useState } from "react";
import {useLogin} from "../hooks/useLogin"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login}= useLogin()

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  //handle password input
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  //handle submit
  const handleSubmit=(e)=>{
    e.preventDefault();
    login(email,password);

  }
  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}>
      <Paper sx={{ padding: "10px" }}>
        <TextField
        value={email}
        onChange={handleEmail}
          fullWidth
          margin='normal'
          label='Email'
          variant='outlined'
          type='email'
        />
        <TextField
        value={password}
        onChange={handlePassword}
          fullWidth
          margin='normal'
          label='Passord'
          variant='outlined'
          type='password'
        />
        <Button
          type="submit"
          sx={{ mt: 1, width: "40%", alignSelf: "flex-start" }}
          fullWidth
          variant='contained'
          color='error'>
          Login
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;
