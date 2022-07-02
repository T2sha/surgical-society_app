/* React */
import React from 'react' ;
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


/* Styling */
import Logo from '../Images/logo.svg';

/*<div classname='left-register'>
<img className='logo-register' src={Logo}/>
 <h1 className='heading'>Surgical Society</h1>
 <h2 className= 'slogan'>Building a Healthy Community One Individual at a Time.</h2>
 <img className= 'auth-img' src={Logo}/>

</div>*/

const Register =() => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        console.log(inputs);

        axios.post('http://localhost/api/addUser.php', inputs)
        .then(function(response){
            console.log(response);

        });

    }

    
    return (
        <div className='register-page'>

            <title>Register</title>

           

            <div className= 'left-register'>
                <form>
                    <h1>Good day!</h1>
                    <h2>Register now!</h2>

                    <div className= 'profile'>
                        <p>Select your profile picture</p>
                        <input name= "names" type="text" placeholder='Name and Surname' onChange={handleChange}/>
                        <input name= "email" type="email" placeholder=' Your Email' onChange={handleChange}/>
                        <input name= "contact" type="text" placeholder='Contact'onChange={handleChange} />
                        <input name= "username" type="text" placeholder='Username' onChange={handleChange}/>
                        <input name= "password" type="text" placeholder='password'onChange={handleChange} />
                        <input name= "password" type="text" placeholder='Confirm Password' />
                        <button type='submit'onClick={handleSubmit}>Register User</button>
                       
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register