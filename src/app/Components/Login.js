import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/counter/userSlice';
import { auth } from '../../firebase';
import "./CSS/Login.css"

function Login() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [profilePic,setProfilePic] = useState("");
  const dispatch = useDispatch();
  const loginToApp = (e) => {
    e.preventDefault();
  }
  const register = () => {
    if(!name){
       return alert("Please enter a full name !");
    }
    auth.createUserWithEmailAndPassword(email,password).then((userAuth) => {
      userAuth.user.updateProfile({
        displayName:name,
        photoURL:profilePic,
      }).then(() => {
        dispatch(login({
                email:userAuth.user.email,    
                uid:userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic

        }))
      })
    }).catch((error) => alert(error));
  };
  return (
    <div className='login'>
      <img src="https://www.online-tech-tips.com/wp-content/uploads/2022/04/Feature-LinkedIn.png" alt="" />
      <form action="">
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Full name (required if registering' />

        <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder='Profile pic url(optional)'/>

        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' />

        <input value={password} onChange={e => setPassword(e.target.value)}type="password" placeholder='Password' />

        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member?{"  "}
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login;