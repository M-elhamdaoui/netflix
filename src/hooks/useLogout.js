import { useUserContext } from "../context/userContext";

import  {auth} from "../firebase/firebase";
import { signOut } from "firebase/auth";

export const useLogout=()=>{
    const {dispatch}=useUserContext();
    const logout=()=>{
        signOut(auth)
            .then(()=>{
                dispatch({type:"LOGOUT"})
            })
            .catch(err=>{
                console.log(err.message);
            })
    }
    return {logout};
}