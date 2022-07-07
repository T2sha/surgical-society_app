import Navigation from './Navigation';
import { UilSearch } from '@iconscout/react-unicons'
import {useNavigate} from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import EditPatients from './EditPatients';

const Patients = (props) =>{


const navigate = useNavigate();

const [renderPatientImage, setRenderPatientImage] = useState();
const [modal, setModal] = useState();

useEffect(() =>{
    const userSession = sessionStorage.getItem('activeUser');
    if(userSession === '' || userSession === null){
        
    }

    let patientId = {id: props.uniqueId};
    axios.post('http://localhost:8888/surgicalApi/readPatientProfile.php', patientId)
    .then((res)=>{
        let data = res.data;
        let source = data[0].image;
        let renderPath = 'http://localhost:8888/surgicalApi/' + source;
        setRenderPatientImage(renderPath);
        console.log(renderPath);
    })
    .catch(err=>{
        console.log(err);
    })

    console.log('asgasg')
},[]);

const editPatient = () => {
    setModal(<EditPatients id={props.uniqueId} upRender={props.rerender} rerender={setModal} origionalName={props.name} origionalSurname={props.surname} origionalAge={props.age} origionalGender={props.gender} origionalCell={props.cellNo} origionalEmail={props.email} origionalMedicalAidNo={props.specialization}/>);
}

const deletePatient = () => {
    if(window.confirm("Are you sure you want to remove this Patient?") === true){
        
        let patientId = {id: props.uniqueId};

        axios.post('http://localhost:8888/surgicalApi/deletePatient.php', patientId)
        .then((res) => {
            let data = res.data;
            console.log(res);
            props.rerender(true);
        });

    } else {
        console.log("The patient was not deleted.");
    }
}


    return (
        <>
         <Navigation/> 

        {modal}
        <div className="patientCard">
            <div className="editPatient" onClick={editPatient}></div>
            <div className="deletePatient" onClick={deletePatient}></div>
            <div className="patientProfile">
                <img src={renderPatientImage} className="patientImage"/>
            </div>
            <h4>{props.name} {props.surname}</h4>
            <p id="medicalAidNo">{props.medicalAidNo}</p>
            <hr/>
            <p><strong>Gender: </strong>{props.gender}</p>
            <p><strong>Age: </strong>{props.age}</p>
            <p><strong>Cell No: </strong>{props.cellNo}</p>
        </div>
    
);


          <div className=" List-Patients">
              <div className="Detailed-view">

              </div>
         </div>

          <div className="Add-New-Patients">
              <div className="form-patients">

              </div>

          </div>



            
       

    
        
        </>
    )
}
export default Patients 