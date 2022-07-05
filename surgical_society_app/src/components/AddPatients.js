import React, { useState } from "react";
import axios from 'axios'
import {useState , useEffect} from 'react';


const AddPatient =(props)=>{
    const [patient, setPatient]=useState({
        name:"",
        surname:"",
        age:"",
        gender:"",
        email:"",
        password:"",
        phone_number:"",
        medical_aid_number:"",
        previous_appointments:"",
    })

    const{name, age, gender, email, password, phone_umber, medical_aid_number, previous_appointments} = patient
    const handleChange= (e) => {
        setPatient({...patient,[e.target.name]: e.target.value})
    }
    const submitForm= async (e) =>{
        e.preventDefault();

        await axios.post("http://localhost:8888/surgicalApi/insert.php'", patient)
        .then((result)=>{
            console.log()
        if (result.dada.status == 'valid'){
           
        }
        else{
            alert('There is a problem in addig, please try again');
        }
     });

    }
    
    return(
        <>
       
        <div className="add-new">
            <h1>Add Patients</h1>
         <form onSubmit={e => submitForm(e)}>

            <input name= 'name'type="text" placeholder='Name' value={name} onChange="form-control"/>
            <input name= 'age'type="text" placeholder='Name' />
            <input name= 'gender'type="text" placeholder='Name' />
            <input name= 'email'type="text" placeholder='Name' />
            <input name= 'password'type="password" placeholder='Name'/>
            <input name= 'phone_number'type="text" placeholder='Name' />
            <input name= 'medical_aid_number'type="text" placeholder='Name' />
            <input name= 'previous_appointments' type="text" placeholder='Name' />
        </form>
        </div>

       

    
        </>
    )
}

export default AddPatient