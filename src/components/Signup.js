import React, { useEffect, useState } from "react";
import { Box, Paper, TextField, Button } from "@mui/material";
import {useSignup} from "../hooks/useSignup";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPass, setSecondPass] = useState("");
  const [ready, setReady] = useState(false);
  const {error,signup} = useSignup()
  //handle email input
  const handleEmail = (e) => {
    setEmail(e.target.value);
   
  };
  //handle password input
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  //hadle second passwword
  const handleSecPass = (e) => {
    setSecondPass(e.target.value);
  };
  //on submit
  const handleSubmit=(e)=>{
    e.preventDefault();
     if (ready) {
       signup(email, password);
     }
 
    
  }
  //set the Ready state
  useEffect(() => {
    if (password.length >= 8 && password === secondPass) {
      setReady(true);
    }
    if (password !== secondPass) {
      setReady(false);
    }
  }, [password, secondPass]);

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
          type='email'
          margin='normal'
          label='Email'
          variant='outlined'
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
        <TextField
          value={secondPass}
          onChange={handleSecPass}
          fullWidth
          margin='normal'
          label='Conferm Passord'
          variant='outlined'
          type='password'
        />
        {ready ? (
          <Button
            type='submit'
            sx={{ mt: 1, width: "40%", alignSelf: "flex-start" }}
            fullWidth
            color='error'
            variant='contained'>
            Signup
          </Button>
        ) : (
          <Button
            type='submit'
            disabled
            sx={{ mt: 1, width: "40%", alignSelf: "flex-start" }}
            fullWidth
            color='error'
            variant='contained'>
            Signup
          </Button>
        )}
        {error && <p>{error}</p>}
      </Paper>
    </Box>
  );
}

export default Signup;
