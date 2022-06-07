import React from 'react';
import {  UilHospital,  UilUser, UilUserMd} from '@iconscout/react-unicons'
import logo from '../Icons/logo.svg'

const Navigation = () => {

    return(
        <>
        <div className="navBar">
            <div className="side">
            <img className="logo" src ={logo}></img>
            <h1>SURGICAL SOCIETY</h1>
            <ul>
                <li><a href="/" className= "Icon1"> <UilHospital/> </a></li>
                <li><a href="/Patients" className= "Icon2"><UilUser/></a></li>
                <li><a href="/Doctors" className= "Icon3"><UilUserMd/></a></li> 
            </ul>
            </div>
        </div>

        

        </>
    )
}
export default Navigation