import React, { useEffect, useState } from 'react';
import EventEmitter from '../../utils/EventEmitter';
import DashboardOrganization from '../../components/containers/main/organization';
import OrganizationForm from '../../components/containers/popups/organization-form';

const Organizations = () => {

    var [popState, setPopState] = useState(false);

    const changePannelState = () => {
        // console.log('POP 1- '+popState);
        if(popState===true){popState=false;}
        else if(popState===false){popState=true;}
        setPopState(!popState);
        // console.log('POP 2- '+popState);
    }

    useEffect(() => {
        const popClose = EventEmitter.addListener("closePannel", changePannelState);
        
        return () => {

            popClose.remove();
            
        }
    }, []);
   
    return (
        <>
            <DashboardOrganization/>

             {
                 popState?<OrganizationForm/>:<></>
             }
            
        </>
    );
}

export default Organizations;