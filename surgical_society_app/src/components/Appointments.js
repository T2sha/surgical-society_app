import React from 'react';
import Navigation from './Navigation';
import drip from '../Images/app.svg';
import doctor from '../Images/doctor.svg'
import Calendar from './Calendar';

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
            
             </div>
             <h4 className="list">List of appointments</h4>




        


         </div>

    





        
        </>
    )
}

export default Appointments