import { useState,useEffect ,useRef } from "react";
import { db } from "../firebase/firebase";
import { collection , onSnapshot, query,where} from "firebase/firestore";

export const useCollection=(c,_q)=>{
    const [documents,setDocuments]=useState(null);

    const q=useRef(_q).current;

    useEffect(()=>{
        console.log(q)
        let ref=collection(db,c);
        if(q){
            ref=query(ref,where(...q));
        }
        const unsub=onSnapshot(ref,(snapshot)=>{
            let res=[];
            snapshot.docs.forEach(doc=>{
                res.push({...doc.data(),id:doc.id})
            })
            setDocuments(res);
        })
        return ()=>unsub();
    },[c,q])

    return {documents}
}
 
