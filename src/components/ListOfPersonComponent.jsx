import React, { useState } from "react";
import { useEffect } from "react";
import RowComponent from "./RowComponent";
import { useNavigate, useParams } from 'react-router-dom';

function ListOfPersonComponent(props) {

    const [employees, setEmployees] = useState([]);
    let navigate = useNavigate();

    const getPersonList = () => {
        fetch("http://localhost:8080/api/v1/persons")
        .then((res)=>res.json())
        .then((apiData) => {
         setEmployees(apiData);
        })
        .catch(err=>{
            alert('Cant fetch from the server');
        });
    }

    useEffect(() => {
        getPersonList();
    }, []);
 
    return  <div className="container">

    <h2 className='text-center'>User List</h2>

    <div className='row'>
        <button onClick={()=> {
            navigate("/add_person")
        }} className='btn btn-primary' >Add Employee</button>
    </div>
        <div className='row'>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Id</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(emp=> {
                            return <RowComponent 
                            getPersonList={getPersonList}
                            id ={emp.id}
                            userId ={emp.userId}
                            firstName ={emp.firstName}
                            middleName ={emp.middleName}
                            lastName ={emp.lastName}
                            email ={emp.email}
                            contactNumber ={emp.contactNumber}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
</div>
}

export default ListOfPersonComponent;