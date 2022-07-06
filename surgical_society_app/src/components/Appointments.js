/* React */
import React from 'react';
import Navigation from './Navigation';
import Calendar from './Calendar';
import { useState, useEffect } from 'react'
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

/* Calendar */
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';


const Appointments = (props)=>{

  const [modal, setModal] = useState();
  const [renderUserInfo, setRenderUserInfo] = useState();
  const [userInfo, setUserInfo] = useState();
  const [greetingName, setGreetingName] = useState();
  const [userId, setUserId] = useState({
    activeUser: sessionStorage.getItem('activeUser'),

});

const editAppointment = () => {
    setModal(<EditAppointment upRender={props.rerender} rerender={setModal} origionalPatientName={props.patientName} origionalDoctorName={props.doctorName} origionalDate={props.date} origionalTime={props.time} origionalRoom={props.room} id={props.uniqueId}/>);
}



  useEffect(()=>{

    axios.post('http://localhost:8888/surgicalApi/receptionistRead.php',userId )
    .then((res)=>{
      let data = res.data;
      let renderUserInfo = data.map((item) =>  <ReceptionistInfo key={item.id} rerender={setRenderUserInfo} name={item.name} surname={item.surname} rank={item.rank}  age={item.age} profileImage={item.profileImage} contact={item.phoneNumber} email={item.email} password={item.password}/>);
      setUserInfo(renderUserInfo);
      setRenderUserInfo(false);
      setGreetingName(data[0].name); 
    })
    .catch(err=>{
      console.log(err);
    });

 },[]);
    return(
        <>
         <Navigation/> 

         <div className = "app-container">
             <img className ="drip" src = {drip}></img>
             <h2>Appointments</h2>
               <div className = "welcome">
                 <h3>Hi, {greetingName}</h3>
                 <p>"May your day be blessed !"</p>
                 <img className="doctor" src={doctor}></img>

             </div>


             <h4>Calendar</h4>
        <div className="calendar">
        <CalendarComponent></CalendarComponent>

             </div>

        <div><input className="search-input" type="text" placeholder="Search..."/>
            <div><button className="search-button"></button>
                 <div className="search-icon"><UilSearch/></div>  
                 </div>

             </div>


             <h4 className="list">List of appointments</h4>
            <div className="app-list">

           



             </div>

             <h4 className="new">Create new appointments</h4>
             <div className="new-appointments">
                 <div className="slot-times">

                 </div>

             </div>

                  <img className="Receptionist" src={Profile}></img>
                 <img className="textside-image" src={text}></img>
                 <h4 className="events">New events</h4>
                 <div className="new-events"></div>
                  

                  



             
            
            
             




        


         </div>

    





        
        </>
    )
}

export default Appointments