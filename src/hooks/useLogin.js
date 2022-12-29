import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useUserContext } from "../context/userContext";
const useLogin=()=>{
    const [error,setError]=useState(null);
    const {dispatch}= useUserContext();

    const login =(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
            .then(resp=>{
                    dispatch({type:"LOGIN",payload:resp.user});
            })
            .catch(err=>setError(err.message))
    }
    
    return {login,error}


}

export default useLogin