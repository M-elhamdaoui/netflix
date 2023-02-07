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
        case "AUTH_NOT_READY":
            return {...state,authIsReady:false};
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
            console.log(user )
            dispatch({type:"AUTH_IS_READY",payload:user});
            unsub()
            })
    },[])
    useEffect(()=>{
        dispatch({type:"LOADING"})
        if(userDoc){
            let data =[...userDoc]
            let doc=data.find(elem=>{
            return elem.uid===state.user?.uid
            });
            dispatch({ type: "USERDOC",payload:doc });
            dispatch({type:"LOADMOD"});
        }
    },[state.user,userDoc])

    
    return (
      <UserContext.Provider value={{ ...state,dispatch}}>
        {children}
      </UserContext.Provider>
    );
}

export const useUserContext=()=>useContext(UserContext);