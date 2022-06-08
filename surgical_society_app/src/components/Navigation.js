import React from 'react';
import {  UilHospital,  UilUser, UilUserMd} from '@iconscout/react-unicons'
import logo from '../Icons/logo.svg'

const Navigation = () => {

    return(
        <>
        <div className="navBar">
            <img className="logo" src ={logo}></img>
            <h1>SURGICAL SOCIETY</h1>
            <div className="side">
            <ul>
                <li className="active"><a href="/" className= "Icon1"> <UilHospital/> </a></li>
                <li className="active"><a href="/Patients" className= "Icon2"><UilUser/></a></li>
                <li className="active"><a href="/Doctors" className= "Icon3"><UilUserMd/></a></li> 
            </ul>
            </div>
        </div>

        

        </>
    )
}
export default Navigation