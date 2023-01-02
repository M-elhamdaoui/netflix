import { doc, updateDoc  } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/firebase"


export const useUpdateDoc=()=>{
const [pending,setPending]=useState(false)

    const updateDocByID=(id,value)=>{
        setPending(true)
        const docRef=doc(db,"Users",id);
        console.log(docRef)
        try{
              updateDoc(docRef,{mod:value}).then(()=>{
                setPending(false);
              })
               
        }catch(err){
            console.log(err)
            setPending(false)
        }
    }
    return {updateDocByID,pending};
}