import React, { useEffect } from 'react';
import UsersTable from '../../components/containers/tables/table-users';
const Users = () => {
   
    return (
        <>
                <div className="container-header">
                    <h2>Users </h2>
                    <p>Dashboard consist of necessary settings for admins and paticular management roles.</p>
                </div>

                <br></br>

                <div className="card">
                    <UsersTable />
                </div>

                <br></br>

                <div className="card">
                    
                </div>
        </>
    );
}

export default Users;
