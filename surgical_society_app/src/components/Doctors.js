import Navigation from './Navigation';
import { UilSearch } from '@iconscout/react-unicons'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import EditPatients from './EditPatients';
import Profile from '../Images/Profile.png';
import eye from '../Icons/eye.svg';
import click2 from '../Images/click2.svg'

/* Images*/
import brain from '../Images/Brain.svg';



const Doctors = (props) => {

    const [ rank, setRank ] = useState();
    useEffect(() => {
        let userRank = sessionStorage.getItem('rank');
        setRank(userRank)
    }, [])

    const [ imageUrl, setImageUrl ] = useState('');
    const changeImage = (e) => {
        let file  = e.target.files[0];
        let reader = new FileReader();

        reader.onloadend = function() {
            let imgFile = reader.result;

            setImageUrl(imgFile);

            let image = new Image();
            image.src = reader.result;
        }

        reader.readAsDataURL(file)
    }

    let aImage = useRef();
    let aName = useRef();
    let aLast = useRef();
    let aAge = useRef();
    let aGender = useRef();
    let aEmail = useRef();
    let aNumber = useRef();
    let aSpecial = useRef();
   
    

    const addPatient = () => {
        let image = aImage.current.value;
        let name = aName.current.value;
        let last = aLast.current.value;
        let age = aAge.current.value;
        let gender = aGender.current.value;
        let email = aEmail.current.value;
        let number = aNumber.current.value;
        let special = aSpecial.current.value;

        let details = {
            img: imageUrl,
            name: name,
            last: last,
            age: age,
            gender: gender,
            email: email,
            number: number,
            special: special
        }
         console.log(details); 

         setRender(true);

        axios.post('http://localhost:8888/surgicalApi/addDoctor.php', details)
        .then((res) => {
            console.log(res)
        })
    }
    


    const navigate = useNavigate();

    const [ render, setRender ] = useState(false);

    let pName = useRef();
    let pNumber = useRef();
    let pSpecial = useRef();
    const updateInfo = (e) => {
        let id = e;
        let name = pName.current.value
        let number = pNumber.current.value
        let special = pSpecial.current.value

        
        let details = {
            name: name,
            number: number,
            special:special,
            id: id
        }

        console.log('asgasg')
        
        axios.post('http://localhost:8888/surgicalApi/updateDoctor.php', details)
        .then((res) => {
            console.log(res)
            setRender(true)
        })
    }

    const deletePat = (e) => {
        let id = e;
        setRender(true);

        axios.post('http://localhost:8888/surgicalApi/deleteDoctor.php', {id: id})
        .then((res) => {
            console.log(res);
        })
    }

    const [ detailedView, setDetailedView ] = useState([]);
    const showPatDetails = (e) => {
        let id = e;

        axios.post('http://localhost:8888/surgicalApi/readDoctorInfo.php', {id: id})
        .then((res) => {
            let defaultValues = [
                res.data[0].name,
                res.data[0].phone_number,
                res.data[0].speciallisation
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
                                    <h21>Phone number</h21>
                                    <h21 className='detailedInfo'>{item.phone}</h21>
                                </div>
                                <div className='secondDetailedInfo'>
                                    <h21>Speciallisation</h21>
                                    <h21 className='detailedInfo'>{item.special}</h21>
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

                    {
                        rank == 'Head Receptionist'
                        ? <button className ="delete2" onClick={() => deletePat(item.id)}>Delete</button>
                        : ''
                    }



                    <div className='update' key={item.id}>
                        <input ref={pName} defaultValue={defaultValues[0]} type="text" placeholder='Patient Name'/>
                        <input ref={pNumber} defaultValue={defaultValues[1]} type="text" placeholder='Patient Number'/>
                        <input ref={pSpecial} defaultValue={defaultValues[2]} type="text" placeholder='Speciallisation'/>

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
        axios.post('http://localhost:8888/surgicalApi/readDoctors.php')
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
                            {detailedView}<img className="click" src= {click2}></img>
                            
                        </div>
                    </div>

                    <div className="Add-New-Patients">
                        <div className="new-patients">
                            <h2 className="Add">ADD NEW PATIENT</h2>
                        <img className ="brain" src = {brain}></img>
                        
                       

                    <div className="new-patient-form">

                    <input ref={aName} type="text" placeholder='Patient Name'/>
                    <input ref={aLast}type="text" placeholder='Patient Surname'/>
                    <select ref={aGender}type="text" placeholder='gender'>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                    </select>
                    <input ref={aAge}type="text" placeholder='Age'/>
                    <input onChange={changeImage} ref={aImage} type="file" placeholder='Select your profile picture '/>
                    <input ref={aEmail} type="text" placeholder='Email'/>
                    <input ref={aNumber} type="text" placeholder='Phone Number'/>
                    <select ref={aSpecial}type="text" placeholder='Spesalisation'>
                        <option value='plastic surgeon'>Plastic surgeon</option>
                        <option value='Cosmetic and oral surgeon'>Tosmetic and oral surgeon</option>
                        <option value='transplant surgeon'>Transplant surgeon</option>
                        <option value='Neurosurgeon'>Neurosurgeon</option>
                    </select>

    
                    




                    <button className="add-appointments2" type="submit" onClick={addPatient}>Add</button>

                    </div>



                        </div>

                    </div>



                </>
            );
}

export default Doctors 