import { doc, updateDoc  } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/firebase"


export const useUpdateDoc=()=>{
const [pending,setPending]=useState(false)
const [done,setDone]=useState(false);

    const updateDocByID=(id,what,value)=>{
        setDone(false)
        setPending(true)
        const docRef=doc(db,"Users",id);
        console.log(docRef)
        try{
              updateDoc(docRef,{[what]:value}).then(()=>{
                setPending(false);
                setDone(true);
              })
               
        }catch(err){
            console.log(err)
            setPending(false)
        }
    }
    return {updateDocByID,pending,done};
}