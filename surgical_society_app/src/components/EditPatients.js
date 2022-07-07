import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const EditPatients = (props) => {

    const [updatedPatient, setUpdatedPatient] = useState({
        id: props.id,
        newName: props.origionalName,
        newSurname: props.origionalSurname,
        newAge: props.origionalAge,
        newGender: props.origionalGender,
        newCellNo: props.origionalCell,
        newEmail: props.origionalEmail,
        newMedicalAidNo: props.medicalAidNo,
    });

    const closeModal = () => {
        props.rerender();
    }

    useEffect(() => {
        document.getElementById('name').innerHTML = props.origionalName;
        document.getElementById('surname').innerHTML = props.origionalSurname;
        document.getElementById('age').innerHTML = props.origionalAge;
        document.getElementById('gender').innerHTML = props.origionalGender;
        document.getElementById('cellNo').innerHTML = props.origionalCell;
        document.getElementById('email').innerHTML = props.origionalEmail;
        document.getElementById('medicalAidNo').innerHTML = props.origionalMedicalAidNo;

        console.log('asgasg')
    },[]);

    const nameChange = (e) => {
        let value = e.target.value;
        setUpdatedPatient({...updatedPatient, newName:value});
        console.log(updatedPatient);
    }

    const surnameChange = (e) => {
        let value = e.target.value;
        setUpdatedPatient({...updatedPatient, newSurname:value});
        console.log(updatedPatient);
    }

    const ageChange = (e) => {
        let value = e.target.value;
        setUpdatedPatient({...updatedPatient, newAge:value});
        console.log(updatedPatient);
    }

    const genderChange = (e) => {
        let value = e.target.value;
        setUpdatedPatient({...updatedPatient, newGender:value});
        console.log(updatedPatient);
    }

    const cellChange = (e) => {
        let value = e.target.value;
        setUpdatedPatient({...updatedPatient, newCellNo:value});
        console.log(updatedPatient);
    }

    const emailChange = (e) => {
        let value = e.target.value;
        setUpdatedPatient({...updatedPatient, newEmail:value});
        console.log(updatedPatient);
    }

    const medicalAidChange = (e) => {
        let value = e.target.value;
        setUpdatedPatient({...updatedPatient, newMedicalAidNo:value});
        console.log(updatedPatient);
    }

    const roomChange = (e) => {
        let value = e.target.value;
        setUpdatedPatient({...updatedPatient, newGender:value});
        console.log(updatedPatient);
    }

    const updatePatient = () => {
        axios.post('http://localhost:8888/surgicalApi/updatePatient.php', updatedPatient)
        .then((res) => {
            let data = res.data;
            console.log(data);
            props.upRender(true);
            props.rerender(); 
        });
    }

    return(
        <div className="editPatientProfile">
            <form>
                <div className="close" onClick={closeModal}></div>
                <h2>Edit Patient Details</h2>
                <input name="name" id="name" placeholder="Name" onChange={nameChange}/>
                <input name="surname" id="surname" placeholder="Surname" onChange={surnameChange}/>
                <input name="age" id="age" placeholder="Age" onChange={ageChange}/>
                <input name="gender" id="gender" placeholder="Gender" onChange={genderChange}/>
                <input name="cellNo" id="cellNo" placeholder="Cellphone Number" onChange={cellChange}/>
                <input name="email" id="email" placeholder="Email Address" onChange={emailChange}/>
                <input name="medicalAidNo" id="medicalAidNo" placeholder="medicalAidNo" onChange={medicalAidChange}/>
                <div className='button' onClick={updatePatient}>Edit this Patient</div>
            </form>
        </div>
    )
}

export default EditPatients;