import React, { useEffect, useState } from 'react';
import organization_service from '../../../services/organization_service';
import './table.css';

const OrganizationsTable = ({data, category}) => {

    const [organizations, setOrganizations] = useState([]);
    const getOrganizations = async () => {
        setOrganizations(await organization_service.getOrganizations())
    }

    const deleteOrganization = async (id) => {
        setOrganizations(await organization_service.getOrganization(id))
    }

    const updateOrganizationStatus = async (id, organization, status) => {
        organization.status = status;
        setOrganizations(await organization_service.updateOrganization(id, organization))
    }
    useEffect(() => {
        
        getOrganizations();
        console.log(organizations);
        return () => {
            
        }
    }, []);
    
    return (
        <div className="container-table">
            <div className="table-heading">
                <h2>Organizations Stats</h2>
                <p>Dashboard consist of necessary settings for admins and paticular management roles.</p>
                <button className="btn btn-primary" onClick={()=>getOrganizations()}>VIEW</button>|
                <button className="btn btn-warning" onClick={()=>getOrganizations("NOT APPROVED")}>DELETE</button>
            </div>
            <br></br>
            <div className="table-body">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Incharge</th>
                        <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            organizations&&organizations.length>0?
                            organizations.map((organization)=>
                            <tr key={organization.id}>
                                <th scope="row">1</th>
                                <td>{organization.name}</td>
                                <td>{organization.address}</td>
                                <td>{organization.incharge?organization.incharge:'Never Mentioned'}</td>
                                <th scope="col"> 
                                    <button className="btn btn-info">VIEW</button>|
                                    <button className="btn btn-danger" onClick={()=>deleteOrganization(organization.contactno)}>REMOVE</button>
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


export default OrganizationsTable;