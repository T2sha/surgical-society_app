import React from 'react';
import {  UilHospital,  UilUser, UilUserMd} from '@iconscout/react-unicons'
import logo from '../Icons/logo.svg'
import {BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';

const Navigation = () => {

    return(
        <>
        <div className="navBar">
            <img className="logo" src ={logo}></img>
            <h1>SURGICAL SOCIETY</h1>
            </div>
            <div className="side">
            </div>
            <ul>
                <li className="active"><Link to="/Appointments" className= "Icon1"> <UilHospital/></Link></li>
                <li className="active"><Link to="/Patients" className= "Icon2"><UilUser/></Link></li>
                <li className="active"><Link to="/Doctors" className= "Icon3"><UilUserMd/></Link></li> 
                <li className="active"><Link to="/Login" className= "Login"><button className="log-button"><p>Logout</p></button></Link></li> 
            </ul>
           
        

        

        </>
    )
}
export default Navigation