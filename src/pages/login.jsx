import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore  } from "firebase/firestore/lite"; 
import { Navigate } from 'react-router-dom';
import { useEffect } from "react";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxk4j4k9R1Nv4HfLVDFdq_XMSbynbPne4",
  authDomain: "wealthify-expense-manager.firebaseapp.com",
  projectId: "wealthify-expense-manager",
  storageBucket: "wealthify-expense-manager.appspot.com",
  messagingSenderId: "737060827030",
  appId: "1:737060827030:web:39a2cbe65404ab7ccdb7b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;

      // Listen to onAuthStateChanged
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAuth', JSON.stringify(true));
        console.log(localStorage.getItem('isAuth'));
        useEffect(() => {
          console.log('useEffect');
          <Navigate replace to="/" />
        }, [localStorage.getItem('isAuth')]);
        
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}


function App() {
  return (
    <div className="App">
        <button onClick={signInWithGoogle}>Continue With Google</button>
    </div>
  );
}

export default App;
