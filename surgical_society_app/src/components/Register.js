/* React */
import React from 'react' ;
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* Images*/
import register from '../Images/Register.svg'
import logo from '../Icons/register-logo.svg'

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
             <img className ="register-img" src = {register}></img>
             <img className ="register-logo" src = {logo}></img>

            <div className= 'register-form'>
                <form>
                    <h1>Good day!</h1>
                    <h2>Register now!</h2>

                    <p className="profile-text">Select your profile picture</p>

                    <div className= 'profile'>

                        </div>

                        <input name= 'name'type="text" placeholder='Name' onChange={handleChange}/>
                        <input name= 'surname'type="text" placeholder='Surname' onChange={handleChange}/>
                        <input name= 'age' type="text" placeholder='Age' onChange={handleChange}/>
                    
                        <select name="gender" defualtValue="none">
                            <option value="none">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
             
                        <input name= 'phone' type="text" placeholder='Phone number' onChange={handleChange}/>
                        <input name= "email" type="text" placeholder='Email' onChange={handleChange}/>
                        <input name= "password" type="text" placeholder='Password'onChange={handleChange} />
                        <input name= "password" type="text" placeholder='Confirm Password' />

                        <button type='submit'onClick={handleSubmit}>Register User</button>
                </form>
            </div>
        </div>
    )
}

export default Register