import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../utils/firebase.js";
import { Navigate } from 'react-router-dom';
import { useEffect } from "react";


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
