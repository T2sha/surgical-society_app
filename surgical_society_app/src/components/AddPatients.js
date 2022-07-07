/*import React, { useState } from "react";
import axios from 'axios'
import {useState , useEffect} from 'react';


const AddPatient =(props)=>{
    let pImage = useRef();
    let pName = useRef();
    let pLast = useRef();
    let pAge = useRef();
    let pGender = useRef();
    let pEmail = useRef();
    let pNumber = useRef();
    let pAid = useRef();
    let pPrevious = useRef();
    let pDate = useRef();

    const addPatient = () => {
        let image = pImage.current.value;
        let name = pName.current.value;
        let last = pLast.current.value;
        let age = pAge.current.value;
        let gender = pGender.current.value;
        let email = pEmail.current.value;
        let number = pNumber.current.value;
        let aid = pAid.current.value;
        let previous = pPrevious.current.value;
        let date = pDate.current.value;

        let details = {
            img: image,
            name: name,
            last: last,
            age: age,
            gender: gender,
            email: email,
            number: number,
            aid: aid,
            previous: previous,
            date: date
        }

        axios.post('http://localhost:8888/surgicalApi/addPatient.php', details)
        .then((res) => {
            console.log(res)
        })
    }
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
            <button type="submit">Add</button>
        </form>
        </div>

       

    
        </>
    )
}

export default AddPatient*/