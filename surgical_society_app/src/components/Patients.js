import Navigation from './Navigation';
import { UilSearch } from '@iconscout/react-unicons'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import EditPatients from './EditPatients';
import Profile from '../Images/Profile.png';
import eye from '../Icons/eye.svg';

/* Images*/
import brain from '../Images/Brain.svg';


const Patients = (props) => {
    const navigate = useNavigate();

    const [ render, setRender ] = useState(false);

    let pName = useRef();
    let pNumber = useRef();
    let pAid = useRef();
    const updateInfo = (e) => {
        let id = e;
        let name = pName.current.value
        let number = pNumber.current.value
        let aid = pAid.current.value

        
        let details = {
            name: name,
            number: number,
            aid: aid,
            id: id
        }

        console.log('asgasg')
        
        axios.post('http://localhost:8888/surgicalApi/updatePatient.php', details)
        .then((res) => {
            console.log(res)
            setRender(true)
        })
    }

    const deletePat = (e) => {
        let id = e;
        setRender(true);

        axios.post('http://localhost:8888/surgicalApi/deletePatient.php', {id: id})
        .then((res) => {
            console.log(res);
        })
    }

    const [ detailedView, setDetailedView ] = useState([]);
    const showPatDetails = (e) => {
        let id = e;

        axios.post('http://localhost:8888/surgicalApi/readPatientInfo.php', {id: id})
        .then((res) => {
            let defaultValues = [
                res.data[0].name,
                res.data[0].phone_number,
                res.data[0].medical_aid_number
            ]

            console.log(defaultValues)
            let patientCard = res.data.map(item => 
                <div>
                    <div className='detailedProfileImg'>
                        <img src={"http://localhost:8888/surgicalApi/" + item.img} alt="" />
                    </div>
                    <div className='detailedProfileName'>
                        <h10>{item.name}</h10>
                    </div>
                    <div className='detailedProfileInfo'>
                            <div className='firstDetailedInfo'>
                                <div className='secondDetailedInfo'>
                                    <h21>Gender</h21>
                                    <h21 className='detailedInfo'>{item.gender}</h21>
                                </div>
                                <div className='secondDetailedInfo'>
                                    <h21>Age</h21>
                                    <h21 className='detailedInfo'>{item.age}</h21>
                                </div>
                            </div>
                            <div className='firstDetailedInfo'>
                                <div className='secondDetailedInfo'>
                                    <h21>Aid Number</h21>
                                    <h21 className='detailedInfo'>{item.medical_aid_number}</h21>
                                </div>
                                <div className='secondDetailedInfo'>
                                    <h21>Appointment</h21>
                                    <h21 className='detailedInfo'>{item.appoint_date}</h21>
                                </div>
                            </div>
                    </div>
                    <div className='detailedProfileHistory'>
                        <div className='profileHistoryTitle'>
                            <h10><strong>Appointment History</strong></h10>
                        </div>
                        <div>
                            <h11>Dr. Kobus 2020-09-10</h11>  
                        </div>
                    </div>

                    <button onClick={() => deletePat(item.id)}>Delete</button>


                    <div className='update' key={item.id}>
                        <input ref={pName} defaultValue={defaultValues[0]} type="text" placeholder='Patient Name'/>
                        <input ref={pNumber} defaultValue={defaultValues[1]} type="text" placeholder='Patient Number'/>
                        <input ref={pAid} defaultValue={defaultValues[2]} type="text" placeholder='Patient Medical Aid Number'/>

                        <button onClick={() => updateInfo(item.id)}>
                            Update Info
                        </button>
                    </div>
                </div>
            )
            setDetailedView(patientCard);
            console.log(res);
        })
    }

    const [ patCards, setPatCards ] = useState([]);
    useEffect(() => {
        console.log('asgasgasg')
        axios.post('http://localhost:8888/surgicalApi/readPatients.php')
        .then((res) => {
            console.log(res);
            let patientCard = res.data.map(item => 
                <div className="patientCard">
                    <div className="patientProfile">
                        <img src={"http://localhost:8888/surgicalApi/" + item.img} className="patientImage" />
                    </div>
                    <div className='patDetailsContainer'>
                        <h41><strong>{item.name}</strong></h41>
                        <p2>{item.gender.toUpperCase() + ', ' + item.age}</p2>
                    </div>
                    <div className='iconContainer'>
                        <img onClick={() => showPatDetails(item.id)} src={eye} alt="" />
                    </div>
                </div>    
            )
            setRender(false)
            setPatCards(patientCard);
        })
    }, [render])
    
    return (
                <>
                    <Navigation />
                    <div className=" List-Patients">

                        {patCards}
                        <div className="Detailed-view">
                            {detailedView}
                        </div>
                    </div>

                    <div className="Add-New-Patients">
                        <div className="new-patients">
                            <h2 className="Add">ADD NEW PATIENT</h2>
                        <img className ="brain" src = {brain}></img>

                    <div className="new-patient-form">

                    <input  type="text" placeholder='Patient Name'/>
                    <input  type="text" placeholder='Patient Surname'/>
                    <input  type="text" placeholder='gender'/>
                    <input type="text" placeholder='Age'/>
                    <input type="text" placeholder='Appointment Date '/>
                    <input type="text" placeholder='Previous Doctor'/>
                    <button type="submit">Add</button>

                    </div>



                        </div>

                    </div>



                </>
            );
}

export default Patients 