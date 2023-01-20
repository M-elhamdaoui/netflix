import { useUserContext } from "../context/userContext";

import  {auth} from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const useLogout=()=>{
    const navigate =useNavigate()
    const {dispatch}=useUserContext();
    const logout=()=>{
        signOut(auth)
            .then(()=>{
                dispatch({type:"LOGOUT"});
                navigate("/");
            })
            .catch(err=>{
                console.log(err.message);
            })
    }
    return {logout};
}