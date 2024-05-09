


import React,{useState} from "react";
import axios from "axios";
import './users.css';
import { Button } from "bootstrap";
function Users(){
    const [state,setState]=useState([]);
    const getUsers=()=>{
        axios.get("https://randomuser.me/api/?results=50")
        .then((usersdata)=>{
            console.log(usersdata.data.results)
            setState(usersdata.data.results)
        })
        .catch((errordata)=>{
            console.log(errordata)
        })
    }
    return(
      
        <div className="usersContainer">
        <div className="" >
            <h2>Users Information</h2>
            <p>User information refers to data associated with individuals who interact with a system, service, or platform. This data can vary widely depending on the context but typically includes details. Dynamic and motivated Computer Application student with a solid foundation in software development and programming languages. Proficient in designing, implementing, and troubleshooting various applications. Possesses strong analytical skills and a keen eye for detail, with a passion for staying updated with emerging technologies. Excels in collaborative environments and is eager to contribute innovative solutions to real-world problems. Seeking opportunities to leverage academic knowledge and practical skills to make meaningful contributions in the field of software development.</p>
        
        <button className="btn btn-danger" onClick={getUsers}>Get Users Data</button>
        </div>
        <div className="mt-5">
        <table className="table table-hover">
            <thead className="table dark">
                <th>Image</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
            </thead>
            <tbody>
               {state.map(function(user){
                return <tr>
                    <td>
                        <img src={user.picture.medium} width={"70px"} height={"70px"}/>
                    </td>
                    <td>
                        {user.name.first} {user.name.last}
                    </td>
                    <td>
                        {user.gender}

                    </td>
                    <td>
                        {user.email}
                    </td>

                </tr>
               })}
            </tbody>
        </table>
        
        </div>
        </div>
    )
}
export default Users;