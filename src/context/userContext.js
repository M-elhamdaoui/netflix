import React,{ useContext ,createContext, useEffect,useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const UserContext=createContext();
export const authReducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {...state,user:action.payload}
        case "LOGOUT":
            return {...state,user:null};
        case "AUTH_IS_READY":
            return {user:action.payload,authIsReady:true};
        default :
            return state;
    }
}

export const UserProvider=({children})=>{
    const  [state,dispatch]=useReducer(authReducer,{
        user:null,
        authIsReady:false
    })
    useEffect(()=>{
        console.log("rerendred")
         const unsub= onAuthStateChanged(auth,(user)=>{
            dispatch({type:"AUTH_IS_READY",payload:user});
            unsub()
            })
    },[])
  
    return (
      <UserContext.Provider value={{ ...state,dispatch}}>
        {children}
      </UserContext.Provider>
    );
}

export const useUserContext=()=>useContext(UserContext);