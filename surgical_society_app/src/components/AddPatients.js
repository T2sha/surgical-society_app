import React, { useState } from "react";
import axios from 'axios'

const AddPatient =()=>{
    const [patient, setPatient]=useState({
        name:"",
        age:"",
        gender:"",
        email:"",
        password:"",
        phone_number:"",
        medical_aid_number:"",
        previous_appointments:"",
    })

    const[name, age, gender, email, password, phone_umber, medical_aid_number, previous_appointments] = patient
    handleChange= (e) => {
        setPatient({...patient,[e.target.name]: e.target.value})
    }
    submitForm= async (e) =>{
        e.preventDefault();

        await axios.post("", patient)
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
        <form submitForm={e => submitForm(e)}></form>



        <div className=""></div>

    
        </>
    )
}

export default AddPatient