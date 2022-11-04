import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../utils/firebase.js";
import sphere_background from "../assets/sphere-grid-black.svg";
import { Link } from "react-router-dom";
import wealthify_logo from "../assets/wealthify-logo.svg";


const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isAuth', JSON.stringify(true));
      console.log(localStorage.getItem('isAuth'));
      window.location.replace("/");
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = GoogleAuthProvider.credentialFromError(error);
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
            <Link to="/" style={{textDecoration:"none", color:"#FFFFFF"}}><h1 className="login-body-header-text" style={{textDecoration:"none", color:"#FFFFFF", marginRight:"10px"}}>HOME</h1></Link>
            <a onClick={signInWithGoogle} className="login-body-header-text">SIGNUP</a>
          </div>
          <div className="login-body-body" >
            <h1 className="login-body-body-text">Track your<span > Money</span><span style={{color:'#6652fc'}}>here</span></h1>
            <div className="login-google-button">
              <h4 className="login-google-button-text"  onClick={signInWithGoogle}>CONTINUE WITH GOOGLE</h4>
            </div>
            <img className="login-body-body-image" src={wealthify_logo} />
          </div>
        </div>
    </div>
);
}

export default App;
