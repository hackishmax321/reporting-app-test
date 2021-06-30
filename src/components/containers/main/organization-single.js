import React, { useEffect, useState } from 'react';
import queryString from 'query-string'
import organization_service from '../../../services/organization_service';
import OrganizationsUserTable from '../tables/table-organization-user';

const OrganizationSingle = () => {
    const {id} = queryString.parse(window.location.search);
    const [selected, setSelected] = useState(null);
    const loadResource = async () => {
        if(id){
            setSelected(await organization_service.getOrganization(id));  
            console.log(selected); 
        }
           
    }
    useEffect(() => {
        loadResource();
        
    }, [])
    return (
        <>
            <div className="card">  
                    <i class="far fa-building font-special"></i>

                    {
                        selected?
                        <div className="card-content">
                            <small>Organization Information</small>
                            <h4>{selected.name}</h4>
                            <p>{selected.description}</p>

                            <div className="card-body">
                                <p>Address :</p> <span>{selected.address}</span>
                                <p>Contact :</p> <span>{selected.contact}</span>
                                <p>Incharge :</p> <span>{selected.incharge}</span>
                                <p>Incharge :</p> <span>{selected.incharge}</span>
                            </div>
                        </div>
                        :

                        <></>
                    }
                        
                    
            </div>

            {
                selected?<OrganizationsUserTable organization={selected}/>:<></>
            }       
                    

        </>
    );
}

export default OrganizationSingle;
