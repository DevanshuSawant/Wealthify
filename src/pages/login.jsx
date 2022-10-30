import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../utils/firebase.js";
import sphere_background from "../assets/sphere-grid-black.svg";
import { Link } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import login_image from "../assets/login-image.png";



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
        }, [user]);
        
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
    <div className="template-main-body"
      style={{ backgroundImage: `url(${sphere_background})`,
      height:'100vh',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#FFFFFF' }}
    >
      <div className="template-header"></div>
        <div className="login-body">
          <div className="login-body-header">
            <Link to="/dashboard" style={{textDecoration:"none", color:"#FFFFFF"}}><h1 className="login-body-header-text" style={{textDecoration:"none", color:"#FFFFFF", marginRight:"10px"}}>HOME</h1></Link>
            <a onClick={signInWithGoogle} className="login-body-header-text">SIGNUP</a>
            <Link to="/heropage" style={{textDecoration:"none", color:"#FFFFFF"}}><h1 className="login-body-header-text" style={{textDecoration:"none", color:"#FFFFFF"}}>ABOUT</h1></Link>
          </div>
          <div className="login-body-body" >
            <h1 className="login-body-body-text">Track your<span > Money</span><span style={{color:'#FF5C5C'}}>here</span></h1>
            <div className="login-google-button">
              <h4 className="login-google-button-text"  onClick={signInWithGoogle}>CONTINUE WITH GOOGLE</h4>
            </div>
            <img className="login-body-body-image" src={login_image} />
          </div>
        </div>
    </div>
);
}

export default App;
