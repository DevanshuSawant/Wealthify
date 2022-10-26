import { getFirestore } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCxk4j4k9R1Nv4HfLVDFdq_XMSbynbPne4", 
    authDomain: "wealthify-expense-manager.firebaseapp.com",
    projectId: "wealthify-expense-manager",
    storageBucket: "wealthify-expense-manager.appspot.com",
    messagingSenderId: "737060827030",
    appId: "1:737060827030:web:39a2cbe65404ab7ccdb7b7",
    measurementId: "G-LVCSCMGMVF"
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();    
 
export {db, app, auth, provider};