import React from 'react';
import Navigation from './Navigation';
import drip from '../Images/app.svg';
import doctor from '../Images/doctor.svg';
import { UilSearch } from '@iconscout/react-unicons'
import Calendar from './Calendar';
import Profile from '../Images/Profilepic.svg'
import text from '../Images/text.svg'

const Appointments = ()=>{
    return(
        <>
         <Navigation/> 

         <div className = "app-container">
             <img className ="drip" src = {drip}></img>
             <h2>Appointments</h2>
               <div className = "welcome">
                 <h3>Hi, Jennifer</h3>
                 <p>"May your day be blessed !"</p>
                 <img className="doctor" src={doctor}></img>

             </div>


             <h4>Calendar</h4>
        <div className="calendar">
            <Calendar/>

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