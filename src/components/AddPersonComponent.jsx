import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonService from '../services/PersonService';

function AddPersonComponent(props) {

    let navigate = useNavigate();

    const [userId, setUserId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const userIdChangeHandle = (event) => {
        setUserId(event.target.value);
        console.log(event.target.name +' '+ event.target.value);
    }

    const fnameChangeHandle = (event) => {
        setFirstName(event.target.value);
        console.log(event.target.name +' '+ event.target.value);
    }

    const middleNameChangeHandle = (event) => {
        setMiddleName(event.target.value);
        console.log(event.target.name +' '+ event.target.value);
    }

    const lnameChangeHandle = (event) => {
        setLastName(event.target.value);
        console.log(event.target.name +' '+ event.target.value);
    }

    const emailChangeHandle = (event) => {
        setEmail(event.target.value);
        console.log(event.target.name + ' '+event.target.value);
    }

    const cNumberChangeHandle = (event) => {
        setContactNumber(event.target.value);
        console.log(event.target.name + ' '+event.target.value);
    }

    function savePersonDetails(e) { 

        e.preventDefault();
        let person = {
                userId: userId,
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                email: email,
                contactNumber: contactNumber
        }
        console.log(person);

        PersonService.createPerson(person).then(res => {
            navigate("/persons");
            alert('Created Successfully');
        })
        .catch(err=> {
            alert("Something's Wrong");
        })
    }

    return <div className='container'>
        <div className='container'></div>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className='text-center'>Add Person</h3>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>

                            <label> User Id </label>
                            <input placeholder='First Name' onChange={userIdChangeHandle} name="userId" className='form-control' required></input>
                            <label> First Name: </label>
                            <input placeholder='First Name' onChange={fnameChangeHandle} name="firstName" className='form-control' required></input>
                            <label> Middle Name </label>
                            <input placeholder='First Name' onChange={middleNameChangeHandle} name="middleName" className='form-control' required></input>
                            <label> Last Name </label>
                            <input placeholder='Last Name' onChange={lnameChangeHandle} name="lastName" className='form-control' required></input>
                            <label> Email </label>
                            <input placeholder='First Name' onChange={emailChangeHandle} name="email" className='form-control' required></input>
                            <label> Contact Number</label>
                            <input placeholder='First Name' onChange={cNumberChangeHandle} name="contactNumber" className='form-control' required></input>

                            <button className='btn btn-success' onClick={savePersonDetails} >Save</button>
                            <button className='btn btn-danger' onClick={()=> {navigate('/persons')}} >Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default AddPersonComponent;