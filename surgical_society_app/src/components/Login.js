import React from 'react';
import login from '../Images/background.svg';


const Login = ()=>{


    return(
        <>
        <img className="log" src={login} ></img>
        <input className="email" type="text" placeholder="Email..."></input>
        <input className="password"type="text" placeholder="Password..."></input>
        <button className="Login-button">LogIn</button>
        </>

    )
};
export default Login