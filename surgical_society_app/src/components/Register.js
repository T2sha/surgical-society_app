/* React */
import React from 'react' ;
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
        if(inputs.first !== ''){setNameError();} 
        console.log(inputs)
    }

    const imageVal = (e) => {           
            let file = e.target.files[0];
            let reader = new FileReader();

            reader.onloadend = function() {
            console.log(reader.result);
            let imgFile = reader.result;

            setInputs({...inputs, image: imgFile});

            let image = new Image();
            image.src = reader.result;
            document.getElementById('profileimg').appendChild(image);
            
            }
            reader.readAsDataURL(file);
    }

    const surnameVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, last: value});
        if(inputs.last !== ''){setSurnameError();} 
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
            setAgeError(<MiniModalLeft message="Invalid input" />); //tooltip
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
            setGenderError(<MiniModalRight message="Select your gender." />); //tooltip
            //Note: Explain why the format isn't valid in the message as well
        }

    }

    const phoneVal = (e) => { //e is for events
        console.log(inputs)
        //validation
        const contactRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

        const value = e.target.value;
        setInputs({...inputs, phone: value});

        //if contact input is empty, set error message to nothing
        if(inputs.phone !== ''){setPhoneError();}

        //check validation
        if(!value.match(contactRegex)){
            setPhoneError(<MiniModalRight message="Contact number is not a valid format" />); //tooltip
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
            setEmailError(<MiniModalLeft message="Email is not a valid format" />);
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
            setPasswordError(<MiniModalLeft message="Password must include a capital,symbols and numbers" />); //tooltip
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
             setPasswordConError(<MiniModalLeft message="Your passwords don't match" />);
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
            setEmailAvail(<MiniModalRight message="Email Is Not Available" />);
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
            setUserAvail(<MiniModalLeft message="Username Is Not Available" />);
            setUserIcon(NotOkay);
         }
        });
    }

   
    const  handleSubmit=() =>{
        if(inputs.name === ''){
            setNameError(<MiniModalLeft message="Everyone has one..." />);
        } else {
            setNameError();
        }

        if(inputs.surname === ''){
            setSurnameError(<MiniModalRight message="You aren't Seal... " />);
        } else {
            setSurnameError();
        }

        if(inputs.age === ''){
            setAgeError(<MiniModalLeft message="You must have an email" />);
        } else {
            setAgeError();
        }

        if(inputs.gender === ''){
            setGenderError(<MiniModalLeft message="You will login with this" />);
        } else {
            setGenderError();
        }

        if(inputs.phone === ''){
            setPhoneError(<MiniModalRight message="We will call you all the time" />);
        } else {
            setPhoneError();
        }

        if(inputs.password === ''){
            setPasswordError(<MiniModalLeft message="Keep it simple and easy..." />);
        } else {
            setPasswordError();
        }

        if(inputs.passwordCon === ''){
            setPasswordConError(<MiniModalLeft message="They Kinda need to match..." />);
        } else {
            setPasswordConError();
        }

        let result = Object.values(inputs).some(o => o === '');
        console.log(inputs)
        // if(result){
        //     console.log('Not working');
        // } else {
            axios.post('http://localhost:8888/surgicalApi/addUser.php', inputs)
            .then(function(response){
             console.log(response);

             if(response.status === 200){
                navigate("/login");
                 console.log("Working Fine");
             }

            });
        // }

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
                    <a href='./Login' ><p className='login-link' >Login</p></a>
                    <div className='imageArea'></div>
                      <p className="profile-text">Select your profile picture</p>
                      
                    <div id="profileing" className= 'profile'onChange={imageVal}>
                    </div>

                        
                        {nameError}
                        <input name= 'name'type="text" placeholder='Name' onChange={nameVal}/>

                        {surnameError}
                        <input name= 'surname'type="text" placeholder='Surname'onBlur={validateUser}  onChange={surnameVal}/>

                        {ageError}
                        <input name= 'age' type="text" placeholder='Age' onChange={ageVal}/>
                        
                        {genderError}
                        <select name="gender" defualtvalue="none" onChange={genderVal}>
                            <option value="none">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        
                        {phoneError}
                        <input name= 'phone' type="text" placeholder='Phone number' onChange={phoneVal}/>

                        {emailError}    
                        {emailAvail}
                        <input name= "email" type="text" placeholder='Email'  onChange={emailVal} onBlur={validateEmail}/>

                        {passwordError}
                        <input name= "password" type="password" placeholder='Password' onChange={passwordVal}/>

                        {passwordConError}
                        <input name= "passwordCon" type="password" placeholder='Confirm Password' onChange={passwordConVal}/>

                        <button type='submit'onClick={handleSubmit}>Register User</button>
            </div>
        </div>
    )
}

export default Register