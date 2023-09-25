import React from 'react';
import { useNavigate } from 'react-router-dom';
import PersonService from '../services/PersonService';

function RowComponent(props){

    let navigate = useNavigate();
    let id = props.id;

    function editPerson(){
        navigate('/update_person/'+id);
    }

   const deletePerson = (id) => {
    PersonService.deletePerson(id)
    .then(res=>{
        props.getPersonList()
    })
   }
    return  <tr key={props.id}>
    <td>{props.id}</td>
    <td>{props.userId}</td>
    <td>{props.firstName}</td>
    <td>{props.middleName}</td>
    <td>{props.lastName}</td>
    <td>{props.email}</td>
    <td>{props.contactNumber}</td>
    <td><button className='btn btn-primary' onClick={editPerson}>Edit</button></td>
    <td><button className='btn btn-secondary' onClick={()=>deletePerson(props.id)}>Delete</button></td>
    
</tr> 
}

export default RowComponent;