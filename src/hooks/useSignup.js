import {useState} from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useUserContext } from "../context/userContext";

export const useSignup=()=>{
    const {dispatch} = useUserContext();

    const [error,setError]=useState(null);

    const signup = (email, password ) => {
        setError(null);
        createUserWithEmailAndPassword(auth,email,password)
        .then(resp=>{
            dispatch({type:"LOGIN",payload:resp.user})
        })
        .catch(err=>{
            setError(err.message)
        })

    };
    return {error,signup}
}