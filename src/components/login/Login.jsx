import React, { useEffect, useState } from 'react'
import Logo from '../../images/full-logo.svg'
import GoogleLogo from '../../images/google-logo.svg'
import { auth, googleSignIn } from "../../firebase"
import "./Login.css"
import { useDispatch } from 'react-redux'
import { login } from "../../features/userSlice"

const Login = () => {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarurl, setAvatarurl] = useState("");
  const [description, setDescription] = useState("New User");
  const [signUp, setSignUp] = useState(false);
  const dispatch = useDispatch("");
  const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleGoogleSignIn = async () =>{
    try{
      await googleSignIn();
    } catch (error){
      console.log(error);
    }
  }

  const register = (e) => { 
    e.preventDefault();
    if(!fullname || !password || !email || !avatarurl){
      return(alert("Please Enter All Inputs"));
    }
    else{
      if(!email.match(validRegex)){
        return(alert("Invalid Email Address"));
      }
    }
    
    auth.createUserWithEmailAndPassword(email,password)
      .then((userAuth)=>{
        userAuth.user.updateProfile({
          displayName: fullname,
          photoURL: avatarurl,
          description: description,
        }).then(()=>{
          dispatch(login({
            email: userAuth.user.email,
            uid : userAuth.user.uid,
            displayName: fullname,
            photoURL: avatarurl,
            description: description,
          }))
        })
      }).catch(error => alert(error));
  } 
  
  const login = (e) => {    
    e.preventDefault();
    
    if(!password || !email){
      return(alert("Please Enter All Inputs"));
    }
    else{
      if(!email.match(validRegex)){
        return(alert("Invalid Email Address"));
      }
    }

    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        profileUrl: userAuth.user.profileUrl,
        description: userAuth.user.description,
      }))
    }).catch(error => {
      if(!e instanceof TypeError){
        alert(error);
      }
    })
  }

  return (
    <div className='login'>
      <div className="container">
        <div className="body">
          <div className="header">
            <img src={Logo} alt="logo" width="135px"/>
          </div>
          <div className="content">
            <h2 className='text-center'>Make the most of your professional life</h2>
            {signUp ? <>
                <div className="form-container">
                <form>
                  <label>Full Name</label>
                  <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
                  <label>Avatar URL</label>
                  <input type="text" value={avatarurl} onChange={(e) => setAvatarurl(e.target.value)}/>
                  <label>Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <label>{"Password (6 or more characters)"}</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <div className="p-holder">
                    <p className='text-center'>
                      By clicking Agree &amp; Join, you agree to the LinkedIn <span><a href="https://www.linkedin.com/legal/user-agreement?trk=registration-frontend_join-form-user-agreement" target="_blank">User Agreement</a></span>,
                      {" "}<span><a href="https://www.linkedin.com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy" target="_blank">Privacy Policy</a></span>, and <span><a href="https://www.linkedin.com/legal/cookie-policy?trk=registration-frontend_join-form-cookie-policy" target="_blank">Cookie Policy</a></span>.
                    </p>
                  </div>
                  <button className='btn-submit' type="submit" onClick={register}>Agree &amp; Join</button>
                  <div className="separator">
                    <hr />
                    <span>or</span>
                    <hr />
                  </div>
                  <div className="google-auth" onClick={handleGoogleSignIn}>
                    <img src={GoogleLogo} alt="google-logo" width="20" height="20" />
                    <p>Continue with Google</p>
                  </div>
                  <div className="bottom-side">
                    <p>Already one LinkedIn? <span onClick={()=>{setSignUp(false)}}>Sign in</span></p>
                  </div>
                </form>
              </div>
            </>
            :<>
              <div className="form-container">
                <form>
                  <label>Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <label>Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <button className='btn-submit' type="submit" onClick={login}>Login</button>
                  <div className="separator">
                    <hr />
                    <span>or</span>
                    <hr />
                  </div>
                  <div className="google-auth" onClick={handleGoogleSignIn}>
                    <img src={GoogleLogo} alt="google-logo" width="20" height="20" />
                    <p>Continue with Google</p>
                  </div>
                  <div className="bottom-side">
                    <p>Need a LinkedIn account? <span onClick={()=>{setSignUp(true)}}>Sign up</span></p>
                  </div>
                </form>
              </div>
            </>}
            <p className='text-center'>Looking to create a page for a business? <span><a href="https://www.linkedin.com/help/linkedin/answer/a543852?trk=registration-frontend_join-form-page-help-link" target="_blank">Get help</a></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login