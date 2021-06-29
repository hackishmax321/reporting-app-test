import React, { useEffect, useState } from 'react';
import officials_service from '../../../services/officials_service';
import './table.css';

const UsersTable = ({data, category}) => {

    const [users, setUsers] = useState([]);
    const getUsers = async (cat) => {
        setUsers(await officials_service.getOfficials(cat))
    }

    const deleteUser = async (id) => {
        setUsers(await officials_service.deleteOfficial(id))
    }

    const updateUserStatus = async (id, user, status) => {
        user.status = status;
        setUsers(await officials_service.updateOfficial(id, user))
    }
    useEffect(() => {
        
        getUsers();
        console.log(users);
        return () => {
            
        }
    }, []);
    
    return (
        <div className="container-table">
            <div className="table-heading">
                <h2>Users Stats</h2>
                <p>Dashboard consist of necessary settings for admins and paticular management roles.</p>
                <button className="btn btn-primary" onClick={()=>getUsers("APPROVED")}>APPROVED USERS</button>|
                <button className="btn btn-warning" onClick={()=>getUsers("NOT APPROVED")}>PENDING USERS</button>|
                <button className="btn btn-danger" onClick={()=>getUsers("DISABLE")}>BLOCKED USERS</button>|
            </div>
            <br></br>
            <div className="table-body">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Name</th>
                        <th scope="col">NIC No.</th>
                        <th scope="col">Status</th>
                        <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users&&users.length>0?
                            users.map((user)=>
                            <tr key={user.contactno}>
                                <th scope="row">1</th>
                                <td>{user.contactno}</td>
                                <td>{user.username}</td>
                                <td>{user.nic}</td>
                                <th scope="col">{user.status}</th>
                                <th scope="col">
                                    <button className="btn btn-success" onClick={()=>updateUserStatus(user.contactno, user, "APPROVED")}>ACCEPT</button>| 
                                    <button className="btn btn-info">VIEW</button>|
                                    <button className="btn btn-danger" onClick={()=>deleteUser(user.contactno)}>REMOVE</button>
                                </th>
                            </tr>
                                )
                                :
                            <></>
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default UsersTable;