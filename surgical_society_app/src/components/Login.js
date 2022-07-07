import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


/* Images*/
import register from '../Images/Register.svg'
import logo from '../Icons/register-logo.svg'

const Login = () => {

    const navigate = useNavigate();
  
    const [inputs, setInputs] = useState({
      email: '', 
      password: ''
  });
  
  const emailVal = (e) => {
    const value = e.target.value.trim();
    setInputs({...inputs, email: value});
    //Add Validation 
  }
  
  const passwordVal = (e) => {
    const value = e.target.value.trim();
    setInputs({...inputs, password: value});
    //Add Validation 
  }
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      console.log(inputs);
  
          axios.post('http://localhost/surgicalApi/readLogin.php', inputs)
              .then(function(response){
               console.log(response);
  
               if(response.data !== false){
                    sessionStorage.setItem('activeUser', response.data[0].name);
                    sessionStorage.setItem('imgProfile', response.data[0].img);
                   navigate("/Appointments");
               }else{
                 console.log('Not working')
               }
  
              });
    }
    return(
        <>
         <img className="register-img" src={register} ></img>
        
         <img className ="register-logo" src = {logo}></img>
             <h2 className= "Side-text">urgical Society</h2>
             <p className="slogan">Building a healthy community one individual at a time.</p>

         <div className= 'register-form'>
         <h2 className= "lo-text">LogIn</h2>
         <form>
         <p className="Rsub-text">Do not have an account?</p>
                    <a href='/' ><p className='login-link' >Register</p></a>
         <input className= "log-input" name= 'email' type="username" placeholder='Email' onChange={emailVal}/>
         <input className ="log-input" name= 'password'type="password" placeholder='Password'onChange={passwordVal}/>
         <button type='submit' onClick={handleSubmit}>Login</button>
         </form>
        </div>
        </>

    )
};
export default Login