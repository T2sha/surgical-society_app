import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const EditDoctor = (props) => {

    const [updatedDoctor, setUpdatedDoctor] = useState({
        id: props.id,
        newName: props.origionalName,
        newSurname: props.origionalSurname,
        newAge: props.origionalAge,
        newGender: props.origionalGender,
        newCellNo: props.origionalCell,
        newEmail: props.origionalEmail,
        newSpecialization: props.origionalSpecialization,
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
        document.getElementById('specialization').innerHTML = props.origionalSpecialization;
    },[]);

    const nameChange = (e) => {
        let value = e.target.value;
        setUpdatedDoctor({...updatedDoctor, newName:value});
        console.log(updatedDoctor);
    }

    const surnameChange = (e) => {
        let value = e.target.value;
        setUpdatedDoctor({...updatedDoctor, newSurname:value});
        console.log(updatedDoctor);
    }

    const ageChange = (e) => {
        let value = e.target.value;
        setUpdatedDoctor({...updatedDoctor, newAge:value});
        console.log(updatedDoctor);
    }

    const genderChange = (e) => {
        let value = e.target.value;
        setUpdatedDoctor({...updatedDoctor, newGender:value});
        console.log(updatedDoctor);
    }

    const cellChange = (e) => {
        let value = e.target.value;
        setUpdatedDoctor({...updatedDoctor, newCellNo:value});
        console.log(updatedDoctor);
    }

    const emailChange = (e) => {
        let value = e.target.value;
        setUpdatedDoctor({...updatedDoctor, newEmail:value});
        console.log(updatedDoctor);
    }

    const specializationChange = (e) => {
        let value = e.target.value;
        setUpdatedDoctor({...updatedDoctor, newSpecialization:value});
        console.log(updatedDoctor);
    }

    const updateDoctor = () => {
        axios.post('http://localhost:8888/surgicalApi/updateDoctor.php', updatedDoctor)
        .then((res) => {
            let data = res.data;
            console.log(data);
            props.upRender(true);
            props.rerender(); 
        });
    }

    console.log(updatedDoctor);

    return(
        <div className="editDoctorProfile">
            <form>
                <div className="close" onClick={closeModal}></div>
                <h2>Edit Doctor Details</h2>
                <input name="name" id="name" placeholder="Name" onChange={nameChange}/>
                <input name="surname" id="surname" placeholder="Surname" onChange={surnameChange}/>
                <input name="age" id="age" placeholder="Age" onChange={ageChange}/>
                <input name="gender" id="gender" placeholder="Gender" onChange={genderChange}/>
                <input name="cellNo" id="cellNo" placeholder="Cellphone Number" onChange={cellChange}/>
                <input name="email" id="email" placeholder="Email Address" onChange={emailChange}/>
                <input name="specialization" id="specialization" placeholder="Specialization" onChange={specializationChange}/>
                <div className='button' onClick={updateDoctor}>Edit this doctor</div>
            </form>
        </div>
    )
}

export default EditDoctor;