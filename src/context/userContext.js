import React,{ useContext ,createContext, useEffect,useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useCollection } from "./useCollection";

const UserContext=createContext();
export const authReducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {...state,user:action.payload}
        case "LOGOUT":
            return {...state,user:null};
        case "AUTH_IS_READY":
            return {user:action.payload,authIsReady:true};
        case "USERDOC":
            return {...state,DOC:action.payload};
        case "LOADMOD":
            return {...state,modeIsReady:true};
        case "LOADING":
            return {...state,modeIsReady:false};
        default :
            return state;
    }
}

export const UserProvider=({children})=>{
    const  [state,dispatch]=useReducer(authReducer,{
        user:null,
        DOC:null,
        authIsReady:false,
        modeIsReady:false
    })
    const {documents:userDoc}=useCollection("Users",state.user? ["uid","==",state.user.uid]:null)
    useEffect(()=>{
         const unsub= onAuthStateChanged(auth,(user)=>{
            console.log(user)
            dispatch({type:"AUTH_IS_READY",payload:user});
            unsub()
            })
    },[])
    useEffect(()=>{
        dispatch({type:"LOADING"})
        if(userDoc){
            dispatch({ type: "USERDOC",payload:userDoc[0] });
            dispatch({type:"LOADMOD"});
        }
    },[userDoc])
    
    return (
      <UserContext.Provider value={{ ...state,dispatch}}>
        {children}
      </UserContext.Provider>
    );
}

export const useUserContext=()=>useContext(UserContext);