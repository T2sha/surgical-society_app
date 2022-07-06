/* React */

import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { UilTimes } from '@iconscout/react-unicons';


const EditReceptionist = (props) => {
   
    const [updatedUser, setUpdatedUser] = useState({
        first: props.name,
        last: props.surname,
        age:props.age,
        gender:props.gender,
        contact:props.contact,
        email: props.email,
        password:props.password,
        id:props.id,
    });

    useEffect(()=>{
        document.getElementById('updateName').value = props.name;
        document.getElementById('updateSurname').value = props.surname;
        document.getElementById('updateAge').value = props.age;
        document.getElementById('updateGender').value = props.gender;
        document.getElementById('updateContact').value = props.contact;
        document.getElementById('updateEmail').value = props.email;
        document.getElementById('updatePassword').value = props.password;
        document.getElementById('updatePasswordCon').value = props.password;
        
        },[]);

        const closeEditUser = () => {
            props.rerender();
          }

          const firstVal = (e) => { //e is for events

            const value = e.target.value;
            setUpdatedUser({...updatedUser, first: value});
    
        }
    

    
    
        const lastVal = (e) => { //e is for events
    
            const value = e.target.value;
            setUpdatedUser({...updatedUser, last: value});
    
    
        }
    
        const emailVal = (e) => { //e is for events

            const value = e.target.value;
            setUpdatedUser({...updatedUser, email: value});

        }
    
        const contactVal = (e) => { //e is for events
    

    
            const value = e.target.value;
            setUpdatedUser({...updatedUser, contact: value});
    

        }
    
        
        const ageVal = (e) => { //e is for events
    
    
            const value = e.target.value;
            setUpdatedUser({...updatedUser, age: value});
    
        }
    
        const passwordVal = (e) => { //e is for events
    

            const value = e.target.value;
            setUpdatedUser({...updatedUser, password: value});

            
        }
    
        
        const genderVal = (e) => { //e is for events
    
            const value = e.target.value;
            setUpdatedUser({...updatedUser, gender: value});

            }
    
        
    
        const passwordConVal = (e) => { //e is for events
    
    
            const value = e.target.value;
            setUpdatedUser({...updatedUser, passwordCon: value});
    
        };

        const updateUser = (e) => {
            e.preventDefault();
        
            axios.post('http://localhost:8888/surgicalApi/updateReceptionist.php', updatedUser)
              .then((res)=>{
                let data = res.data;
                console.log(data); 
                props.upRender(true);
                props.rerender();
              });
          }
        

    return(
     <>

<div className='editUserDiv'>
              <div className='edit-doctor'>
            <div className='edit-doctor-form'>
                <form id="doctorForm">
                <button className='closeBtn editVet' id="btn" onClick={closeEditUser}><div className='close-icon'><UilTimes/></div></button>
                    <div className='heading doc'>
                   
                        <h1>Update Profile</h1>
                        <h3>Lets make them changes!</h3>

                    </div>

                    <div className='new-doc-container'>

                
                    <input name='first' id='updateName' className="half-input" type='text' placeholder='First Name'onBlur={firstVal}/>

                 
                    <input name='last' id='updateSurname' className="half-input" type='text' placeholder='Surname' onBlur={lastVal}/>
             
                
                  
                 
                    <input name='age' id='updateAge' className="half-input" type='text' placeholder='Age' onBlur={ageVal}/>
                

                  
                    <select name="gender" id='updateGender' onBlur={genderVal} defaultValue={props.gender}>
                        <option value="none">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">other</option>
                    </select>
                    
                
             
                   
                    <input name='email' id='updateEmail'type='email' placeholder='Email' onBlur={emailVal}/>

                 
                    <input name='contact'  id='updateContact'type='text' placeholder='Contact Number' onBlur={contactVal} />          

                   
                    <input name='password' id='updatePassword' type='password' placeholder='Password' onBlur={passwordVal}/>
            
                    
                    <input name='passwordCon' id='updatePasswordCon' type='password' placeholder='Confirm password' onBlur={passwordConVal}/>
       

                       

                        <button className='primary-btn editVet' id='btn' onClick={updateUser} >Make Changes!</button>
                        <button className='primary-btn editVet two' id='btn' onClick={closeEditUser} >Cancel</button>
                        
                    </div>
                  
                </form>
            </div>
        </div>
            
    
            
        </div>
      )

    




    
    
    
    
    </>)
}
export default  EditReceptionist
