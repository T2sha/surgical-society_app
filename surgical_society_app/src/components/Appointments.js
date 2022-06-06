import React from 'react';
import Navigation from './Navigation';
import drip from '../Images/app.svg';

const Appointments = ()=>{
    return(
        <>
         <Navigation/>

         <div className = "app-container">
             <img className ="drip" src = {drip }></img>
             <h2>Appointments</h2>


         </div>

    





        
        </>
    )
}

export default Appointments