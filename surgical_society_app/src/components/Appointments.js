/* React */
import React from 'react';
import Navigation from './Navigation';
import { useState, useEffect, useRef } from 'react'
import axios from 'axios';

/*Pages*/
import ReceptionistInfo from './ReceptionistInfo';

/* Images */
import Profile from '../Images/Profilepic.svg'
import text from '../Images/text.svg'
import drip from '../Images/app.svg';
import doctor from '../Images/doctor.svg';

/* Icons */
import { UilSearch } from '@iconscout/react-unicons'
import EditAppointment from "./EditAppointment";
import deleteIcon from '../Icons/delete.svg';


/* Calendar */
// import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import Calendar from '../components/MyCalendar'


const Appointments = (props)=>{

    const [ rerender, setRerender ] = useState(false);
    const deleteAppoint = (e) => {
        axios.post('http://localhost:8888/surgicalApi/deleteAppointments.php', {id: e})
        .then((res) => {
            setRerender(true);
        })

    }
    
    const [ recepName, setRecepName ]= useState('');
    const [ recepGender, setRecepGender]=useState('');
    const [ recepPhone, setRecepPhone]=useState('');
    const [ recepEmail, setRecepEmail]=useState('');
    const [ recepRank, setRecepRank]=useState('');
    const [ recepImg, setRecepImg ]= useState('');
    const [ appointsData, setAppointsData ] = useState([]);
    const [ patData, setPatData ] = useState([]);
    const [ docData, setDocData ] = useState([]);
    const [ eventData, setEventData ] = useState([]);
    useEffect(() => {
        setRerender(false);
        let username = sessionStorage.getItem('activeUser');
        let image = sessionStorage.getItem('imgProfile');
        let gender = sessionStorage.getItem('gender');
        let phone = sessionStorage.getItem('phone');
        let email = sessionStorage.getItem('email');
        let rank = sessionStorage.getItem('rank');

        console.log("🚀 ~ file: Appointments.js ~ line 46 ~ useEffect ~ image", image)
        setRecepImg(image);
        setRecepName(username);
        setRecepGender(gender);
        setRecepPhone(phone);
        setRecepEmail(email);
        setRecepRank(rank);



        axios.post('http://localhost:8888/surgicalApi/readEvents.php')
        .then((res) => {
            console.log(res);
            setEventData(res.data)
        })

        axios.post('http://localhost:8888/surgicalApi/readDoctors.php')
        .then((res) => {
            setDocData(res.data)
        })

        axios.post('http://localhost:8888/surgicalApi/readPatients.php')
        .then((res) => {
            setPatData(res.data)
        })

        axios.post('http://localhost:8888/surgicalApi/readAppointments.php')
        .then((res) => {

            if(res.data.length > 1) {
                let appointItem = res.data.map(item => 
                    <div className='appoint-table' key={item.id}>
                        <p1>{item.name}</p1>
                        <p1>{item.doctor}</p1>
                        <p1>{item.date}</p1>
                        <img onClick={() => deleteAppoint(item.id)} src={deleteIcon} alt="" />
                    </div>    
                )
                setAppointsData(appointItem);
            } else {
                setAppointsData('Please add an appointment');
            }

        })
    }, [rerender]);

    let aPatient = useRef();
    let aDoctor = useRef();
    let aDate = useRef();
    const addAppointment = () => {
        let patient = aPatient.current.value;
        let doc = aDoctor.current.value;
        let date = aDate.current.value;

        let details = {
            pat: patient,
            doc: doc,
            date: date
        }

        console.log(details)
        
        axios.post('http://localhost:8888/surgicalApi/createAppointment.php', details)
        .then((res) => {
            setRerender(true);
        })
    }

/*     const editAppointment = () => {
        setModal(<EditAppointment upRender={props.rerender} rerender={setModal} origionalPatientName={props.patientName} origionalDoctorName={props.doctorName} origionalDate={props.date} origionalTime={props.time} origionalRoom={props.room} id={props.uniqueId}/>);
    } */

    const [ eventMess, setEventMess ] = useState('');
    let eventMessage = useRef();
    const getEventMessage = (e) => {
        let message = e.target.value;
        console.log(message)
        setEventMess(...message, message);
    }

    const addEvent = () => {
        console.log(eventMessage.current.value)
        axios.post('http://localhost:8888/surgicalApi/createEvent.php', {message: eventMessage.current.value})
        .then((res) => {
            setRerender(true);
        })
    }

    return(
        <>
            <Navigation/> 

            <div className = "app-container">
                <img className ="drip" src = {drip}></img>
                <h2>Appointments</h2>
                <div className = "welcome">
                    <h3>Hi, {recepName}</h3>
                    <p>"May your day be blessed !"</p>
                    <img className="doctor" src={doctor}></img>
                </div>


                <h4>Calendar</h4>
                <div className="calendar">
                    <textarea onChange={(e) => getEventMessage(e)} ref={eventMessage}></textarea>
                    <button onClick={addEvent}>Add event</button>

                </div>

                <div>
                    <input className="search-input" type="text" placeholder="Search..."/>
                    <div>
                        <button className="search-button"></button>
                        <div className="search-icon"><UilSearch/></div>  
                    </div>
                </div>

                <h4 className="list">List of appointments</h4>
                <div className="app-list">
                    {appointsData}
                </div>

                <h4 className="new">Create new appointments</h4>
                <div className="new-appointments">
                    <div className="slot-times">
                        <select ref={aPatient} name="" id="">
                            <option>Please select a patient</option>
                            {
                                patData.map(item => <option key={item.id} value={item.name}>{item.name}</option>)
                            }
                        </select>
                        <select ref={aDoctor} name="" id="">
                            <option>Please select a doctor</option>
                            {
                                docData.map(item => <option key={item.id} value={item.name}>{item.name}</option>)
                            }
                        </select>
                        <input ref={aDate} type='date' placeholder='Choose a date '/>

                        <button onClick={addAppointment}>Add Appointment</button>
                    </div>
                </div>

                <div className='recep-info'>
                    <div className="Receptionist">
                        <img  src={"http://localhost:8888/surgicalApi/" + recepImg} alt="" />
                    </div>

                    <div className="textside-image">
                            <h14>{recepName}</h14>
                            <h22>{recepGender}</h22>
                            <h22>{recepPhone}</h22>
                            <h22>{recepEmail}</h22>
                            <h22>{recepRank}</h22>
                    </div>
                </div>

                <h4 className="events">New events</h4>
                <div className="new-events">
                    {
                        eventData.map(item => <h1 key={item.id}>{item.message}</h1>)
                    }
                </div>
            </div>
        </>
    )
}

export default Appointments