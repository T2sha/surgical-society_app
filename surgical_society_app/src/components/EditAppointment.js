import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const EditAppointment = (props) => {

    const [data, setData] = useState([]);
    const [roomData, setRoomData] = useState([]);
    const [dataPatient, setDataPatient] = useState([]);
    let selectedDoctor = useRef();
    let selectedRoom = useRef();
    let selectedPatient = useRef();

    useEffect(() => {
        axios.get('http://localhost:8888/surgicalApi/readDoctors.php')
        .then((res) => {
            let docData = res.data;
            setData(docData);
        })
        .catch(err=>{
            console.log(err);
        });

        axios.get('http://localhost:8888/surgicalApi/readRoom.php')
        .then((res) => {
            let data = res.data;
            setRoomData(data);
        })
        .catch(err=>{
            console.log(err);
        });

        axios.get('http://localhost:8888/surgicalApi/readPatients.php')
        .then((res) => {
            let PatientData = res.data;
            setDataPatient(PatientData);
        })
        .catch(err=>{
            console.log(err);
        })
        
    },[]);

    const [updatedAppointment, setUpdatedAppointment] = useState({
        id: props.id,
        newPatient: props.origionalPatientName,
        newDate: props.origionalDate,
        newTime: props.origionalTime, 
        newDoctor: props.origionalDoctorName,
        newRoom: props.origionalRoom
    })

    const closeModal = () =>{
        props.rerender();
    }

    useEffect(() => {
        document.getElementById('patientName').innerHTML = props.origionalPatientName;
        document.getElementById('time').innerHTML = props.origionalTime;
        document.getElementById('dr').innerHTML = props.origionalDoctorName;
        document.getElementById('drRoom').innerHTML = props.origionalRoom;
        document.getElementById('date').innerHTML = props.origionalDate;
    }, []);

    const nameChange = (e) => {
        let value = selectedPatient.current.value;
        setUpdatedAppointment({...updatedAppointment, newPatient:value});
    }

    // const docVal = () => {
    //     const doctorName = selectedDoctor.current.value;
    //     setNewAppointment({...newAppointmet, doctorName: doctorName});

    //     // validate if the field is empty.
    //     if(newAppointmet.doc !== ''){setDocError();}
    // }

    const doctorChange = () => {
        let newDoctor = selectedDoctor.current.value;
        setUpdatedAppointment({...updatedAppointment, newDoctor: newDoctor});
    }

    const timeChange = (e) => {
        let value = e.target.value;
        setUpdatedAppointment({...updatedAppointment, newTime:value});
    }

    const dateChange = (e) => {
        let value = e.target.value;
        setUpdatedAppointment({...updatedAppointment, newDate:value});
    }

    const roomChange = () => {
        let newRoom = selectedRoom.current.value;
        setUpdatedAppointment({...updatedAppointment, newRoom:newRoom});
    }

    const updateAppointment = () => {
        axios.post('http://localhost:8888/mediclinicApi/updateAppointment.php', updatedAppointment)
        .then((res) => {
            let data = res.data;
            console.log(data);
            props.upRender(true);
            props.rerender();
        });
    }

    return(
        <div className="editAppointment">
            <form>
                <div className="close" onClick={closeModal}></div>
                <h2>Edit Appointment</h2>
                <select name="name" id="patientName" ref={selectedPatient} onChange={nameChange}>
                    <option>Select Patient</option>
                    {dataPatient.map(item => <option key={item.id}>{item.name} {item.surname}</option>)}
                </select>
                <input name="date" type="date" id="date" onChange={dateChange}/>
                <input name="time" type="time" id="time" onChange={timeChange}/>
                <select name="room" id="drRoom" ref={selectedRoom} onChange={roomChange}>
                    <option>Select Room</option>
                    {roomData.map(item => <option key={item.id}>{item.room}</option>)}
                </select>
                <select name="doc" id="dr" ref={selectedDoctor} onChange={doctorChange}>
                    <option id="dr">Select Doctor</option>
                    {data.map(item => <option key={item.id}>{item.surname}</option>)}
                </select>
                <div className='button' onClick={updateAppointment}>Edit this appointment</div>
            </form>
        </div>
    )
}

export default EditAppointment;