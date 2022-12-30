import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQYDhcEgAxWAWuDD5Eb_-aQJPCQUxa6Wk",
  authDomain: "netflix-clone-d5cf1.firebaseapp.com",
  projectId: "netflix-clone-d5cf1",
  storageBucket: "netflix-clone-d5cf1.appspot.com",
  messagingSenderId: "130358856131",
  appId: "1:130358856131:web:7adc2607b9e5519b275576",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth=getAuth();

export {auth};
