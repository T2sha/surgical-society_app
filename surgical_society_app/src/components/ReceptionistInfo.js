import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';
import EditReceptionist from './EditReceptionist'


const ReceptionistInfo = (props) => {

    // Get and output active users information

    const[renderImage, setRenderImage] = useState();

    useEffect(()=>{

        const receptionistSession = sessionStorage.getItem('activeUser');
        

        let receptionistProfile ={activeUser: receptionistSession};

        axios.post('http://localhost:8888/surgicalApi/receptionistRead.php', receptionistProfile)
        .then((res) =>{
            let data= res.data;
            //image to output
            let source = data[0].profileImage;
            let renderpath = "http://localhost:8888/surgicalApi/" + source;
            setRenderImage(renderpath);
        })

        .catch(err=>{
            console.log(err);
        })

        console.log('aasgasg')
        
    }, []);

    const [modal, setModal] = useState();

    const editReceptionist = (props) => {
    console.log("clicked");
    setModal(<EditReceptionist upRender={props.rerender} rerender={setModal} name={props.name} surname={props.surname} id={props.uniqueId} age={props.age} gender={props.gender} contact={props.contact} password={props.password} email={props.email} />)
   
};

return(
    <>
    <div>
        {modal}
        <div className="Receptionist">
            <img className='Img' src={renderImage}/>
            <div className="Top">
                <div className='Info'>

                    <div className='text-info'>
                        <h2>{props.name + "" + props.surname}</h2>
                        <p>Receptionist</p>
                        <p>Age: {props.age}</p>
                        <p>{props.rank}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    
    
    </>
)
}
export default  ReceptionistInfo