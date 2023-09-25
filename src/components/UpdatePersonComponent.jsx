import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import PersonService from '../services/PersonService';
import { useParams } from "react-router-dom";
import axios from 'axios';

function UpdatePersonComponent(props) {
    let navigate = useNavigate();
    const { id } = useParams();
   
    const [person, setPerson] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/persons/'+id)
          .then(res => {
            let person = res.data;
            console.log(person);
            setPerson(person);
          })
    }, []);

    const [userId, setUserId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const userIdChangeHandle = (event) => {
        setUserId(event.target.value);
        console.log(event.target.name + ' ' + event.target.value);
    }

    const fnameChangeHandle = (event) => {
        setFirstName(event.target.value);
        console.log(event.target.name + ' ' + event.target.value);
    }

    const middleNameChangeHandle = (event) => {
        setMiddleName(event.target.value);
        console.log(event.target.name + ' ' + event.target.value);
    }

    const lnameChangeHandle = (event) => {
        setLastName(event.target.value);
        console.log(event.target.name + ' ' + event.target.value);
    }

    const emailChangeHandle = (event) => {
        setEmail(event.target.value);
        console.log(event.target.name + ' ' + event.target.value);
    }

    const cNumberChangeHandle = (event) => {
        setContactNumber(event.target.value);
        console.log(event.target.name + ' ' + event.target.value);
    }

    function savePersonDetails(e) {
        e.preventDefault();

        const userAydee = document.getElementById('userId').value;
        const persName = document.getElementById('firstName').value;
        const midname = document.getElementById('middleName').value;
        const lasName = document.getElementById('lastName').value;
        const imeyl = document.getElementById('email').value;
        const kontak = document.getElementById('contactNumber').value;
        
        console.log(userAydee);
        console.log(persName);
        console.log(midname);

        axios.put('http://localhost:8080/api/v1/persons/'+id, {
            userId:userAydee,
            firstName: persName,
            middleName: midname,
            lastName:lasName,
            email:imeyl,
            contactNumber:kontak
        })
        .then(res=>{
            console.log(id);
            console.log(res.data)
            alert('updated successfully');
        })
        navigate('/persons');
    }

    return <div className='container'>
        <div className='container'></div>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className='text-center'>Update Person Details ID: { }</h3>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>

                            <label> User Id </label>
                            <input placeholder='First Name' onChange={userIdChangeHandle} id="userId" className='form-control' defaultValue ={person.userId}></input>
                            <label> First Name: </label>
                            <input placeholder='First Name' onChange={fnameChangeHandle} id="firstName" className='form-control' defaultValue ={person.firstName}></input>
                            <label> Middle Name </label>
                            <input placeholder='First Name' onChange={middleNameChangeHandle} id="middleName" className='form-control' defaultValue ={person.middleName}></input>
                            <label> Last Name </label>
                            <input placeholder='Last Name' onChange={lnameChangeHandle} id="lastName" className='form-control'defaultValue ={person.lastName}></input>
                            <label> Email </label>
                            <input placeholder='First Name' onChange={emailChangeHandle} id="email" className='form-control' defaultValue ={person.email}></input>
                            <label> Contact Number</label>
                            <input placeholder='First Name' onChange={cNumberChangeHandle} id="contactNumber" className='form-control' defaultValue ={person.contactNumber}></input>

                            <button className='btn btn-success' onClick={savePersonDetails} >Save</button>
                            <button className='btn btn-danger' onClick={() => { navigate('/persons') }} >Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}
export default UpdatePersonComponent;