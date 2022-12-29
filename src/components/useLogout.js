import { useState } from "react";
import { auth } from "../firebase/firebase";
import  {signOut} from "firebase/auth"

export const useLogout=()=>{
    const [error,setError]=useState(null);
    const logout =()=>{
        signOut(auth)
            .then(()=>{
                console.log("user signed out")
            })
            .catch(err=>setError(err.message));
    }
    return {error,logout};
}