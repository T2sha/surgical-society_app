/* React */
import React, { useRef } from 'react' ;
import axios from 'axios';
import MiniModalLeft from './/MiniModalLeft';
import MiniModalRight from './MiniModalRight';
import { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

/* Images*/
import register from '../Images/Register.svg'
import logo from '../Icons/register-logo.svg'

/*Icons*/
import Okay from '../Icons/okay.svg';
import NotOkay from '../Icons/notOkay.svg';

const Register =() => {

    let navigate = useNavigate();

    const [inputs, setInputs] = useState({
        first:'',
        last:'',
        age:'',
        gender:'',
        phone:'',
        email:'',
        password:'',
        passwordCon:'',
        image:'No Image',
    });
    
    //UseState for each error message
    const [nameError, setNameError] = useState();
    const [surnameError, setSurnameError] = useState();
    const [ageError, setAgeError] = useState();
    const [genderError, setGenderError] = useState();
    const [phoneError, setPhoneError] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordConError, setPasswordConError] = useState();
    const [imageError, setImageError] = useState();

    //To make sure if input is available
    const [emailAvail, setEmailAvail] = useState();
    const [userAvail, setUserAvail] = useState();
    
    //Show icon after input is available
    const [emailIcon, setEmailIcon] = useState();
    const [userIcon, setUserIcon] = useState();

    const nameVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, first: value});
        if(inputs.first !== ''){setNameError();} else {
            setNameError('Please enter a name')
        } 
        console.log(inputs)
    }

    const fileClick = () => {
        inputFile.current.click();
        console.log('asg')
    }
    const inputFile = useRef();
    const imageVal = (e) => {           
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.onloadend = function() {
            let imgFile = reader.result;

            setInputs({...inputs, image: imgFile});

            let image = new Image();
            image.src = reader.result;
            document.getElementById('profileImg').appendChild(image);
            
        }
        console.log('asg')
        reader.readAsDataURL(file);
    }

    const surnameVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, last: value});
        if(inputs.last !== ''){setSurnameError();} else {
            setSurnameError('Please enter a last name')
        } 
    }

    const ageVal = (e) => { //e is for events

        //validation
        const ageRegex = /^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/;

        const value = e.target.value;
        setInputs({...inputs, age: value});

        //if contact input is empty, set error message to nothing
        if(inputs.age !== ''){setAgeError();}

        //check validation
        if(!value.match(ageRegex)){
            setAgeError("Invalid input"); //tooltip
            //Note: Explain why the format isn't valid in the message as well
        }
    }

    const genderVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, gender: value});

        //if password input is empty, set error message to nothing
        if(inputs.gender !== 'none'){setGenderError();}

          //check validation
          if(value === 'none'){
            setGenderError("Select your gender."); //tooltip
            //Note: Explain why the format isn't valid in the message as well
        }

    }

    const phoneVal = (e) => { //e is for events
        console.log(inputs)
        //validation
        const contactRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

        const value = e.target.value;
        setInputs({...inputs, phone: value});

        //if contact input is empty, set error message to nothing
        if(inputs.phone !== ''){setPhoneError();}

        //check validation
        if(!value.match(contactRegex)){
            setPhoneError("Contact number is not a valid format"); //tooltip
            //Note: Explain why the format isn't valid in the message as well
        }
    }

    const emailVal = (e) => {
        const mailcodex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const value = e.target.value;
        setInputs({...inputs, email: value});
        if(inputs.email !== ''){
            setEmailError();
        } 
        if(!value.match(mailcodex)){
            setEmailError("Email is not a valid format");
        }    
    }

    const passwordVal = (e) => { //e is for events

        //validation
        const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;

        const value = e.target.value;
        setInputs({...inputs, password: value});

        //if password input is empty, set error message to nothing
        if(inputs.password !== ''){setPasswordError();}

        //check validation
        if(!value.match(passwordRegex)){
            setPasswordError("Password must include a capital,symbols and numbers"); //tooltip
            //Note: Explain why the format isn't valid in the message as well
        }
    }

    const passwordConVal = (e) => { //e is for events
        const value = e.target.value;
        setInputs({...inputs, passwordCon: value});

        //if password input is empty, set error message to nothing
        if(inputs.passwordCon !== ''){setPasswordConError();}

        //check if matching
       if(inputs.password === value){
           setPasswordConError();
        }else{
            setPasswordConError("Your passwords don't match");
        }
    }

    const validateEmail = () => {
        axios.post('http://localhost:8888/surgicalApi/authenticateEmail.php', inputs)
        .then(function(response){
         console.log(response);
         if(response.data === "Available"){
            setEmailIcon(Okay);
            setEmailAvail();
         } else if(response.data === "Not Available") {
            setEmailAvail("Email Is Not Available");
            setEmailIcon(NotOkay);
         } else if(response.data === "") {
            setEmailIcon();
            setEmailAvail();
            setEmailError();
         }
        });
    }

    const validateUser = () => {
        axios.post('http://localhost:8888/surgicalApi/authenticateEmail.php', inputs)
        .then(function(response){
         console.log(response);
         if(response.data === "Available"){
            setUserAvail();
            setUserIcon(Okay);
         } else {
            setUserAvail("Username Is Not Available")
            setUserIcon(NotOkay);
         }
        });
    }

   
    const  handleSubmit=() =>{
        if(inputs.name === ''){
            setNameError("Everyone has one..." )
        } else {
            setNameError();
        }

        if(inputs.surname === ''){
            setSurnameError("You aren't Seal... ");
        } else {
            setSurnameError();
        }

        if(inputs.age === ''){
            setAgeError("You must have an email");
        } else {
            setAgeError();
        }

        if(inputs.gender === ''){
            setGenderError("You will login with this");
        } else {
            setGenderError();
        }

        if(inputs.phone === ''){
            setPhoneError("We will call you all the time");
        } else {
            setPhoneError();
        }

        if(inputs.password === ''){
            setPasswordError("Keep it simple and easy...");
        } else {
            setPasswordError();
        }

        if(inputs.passwordCon === ''){
            setPasswordConError("They Kinda need to match...");
        } else {
            setPasswordConError();
        }

        let result = Object.values(inputs).some(o => o === '');
        console.log(inputs)
        if(result){
            console.log('Not working');
        } else {
            axios.post('http://localhost:8888/surgicalApi/createUser.php', inputs)
            .then(function(response){
             console.log(response);

             if(response.status === 200){
                navigate("/Login");
                 console.log("Working Fine");
             }

            });
        }

    }
    return (
        <div className='register-page'>
             <img className ="register-img" src = {register}></img>
             <img className ="register-logo" src = {logo}></img>
             <h2 className= "Side-text">urgical Society</h2>
             <p className="slogan">Building a healthy community one individual at a time.</p>


            <div className= 'register-form'>
                    <h2 className= "R-text">Register</h2>
                    <p className="Rsub-text">Already have an account?</p>
                    <a href='./Login'><p className='login-link'>Login</p></a>

                    <p className="profile-text" onClick={fileClick}>Select your profile picture</p>
                    <input type="file" ref={inputFile} onChange={imageVal} style={{display: 'none'}} />
                      
                    <div id="profileing" className= 'profile' onClick={fileClick}>
                        <div id='profileImg'>

                        </div>
                    </div>

                    <div className='inputs-container'>
                        <div className='inputs-errors'>
                            <label>{nameError}</label>
                            <label>{surnameError}</label>
                        </div>
                        <div className='inputs'>
                            <input name= 'name'type="text" placeholder='Name' onChange={nameVal}/>

                            <input name= 'surname'type="text" placeholder='Surname'onBlur={validateUser}  onChange={surnameVal}/>
                        </div>

                        <div className='inputs-errors'>
                            <label>{ageError}</label>
                            <label>{genderError}</label>
                        </div>

                        <div className='inputs'>
                            <input name= 'age' type="text" placeholder='Age' onChange={ageVal}/>
                            
                            <select name="gender" defualtvalue="none" onChange={genderVal}>
                                <option value="none">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className='inputs-errors'>
                            <label>{phoneError}</label>
                            <label>{emailError} </label>   
                            <label>{emailAvail}</label>
                        </div>

                        <div className='inputs'>
                            <input name= 'phone' type="text" placeholder='Phone number' onChange={phoneVal}/>
                            <input name= "email" type="text" placeholder='Email'  onChange={emailVal} onBlur={validateEmail}/>
                        </div>

                        <div className='inputs-errors'>
                            <label>{passwordError}</label>
                            <label>{passwordConError}</label>
                        </div>

                        <div className='inputs'>
                            <input name= "password" type="password" placeholder='Password' onChange={passwordVal}/>
                            <input name= "passwordCon" type="password" placeholder='Confirm Password' onChange={passwordConVal}/>
                        </div>
                        
                        <button type='submit'onClick={handleSubmit}>Register User</button>
                    </div>          
            </div>
        </div>
    )
}

export default Register