import React, { useEffect, useState } from 'react';
import EventEmitter from '../../utils/EventEmitter';
import OrganizationsUserTable from '../../components/containers/tables/table-organization-user';
import { Route, Switch, NavLink, Link, useRouteMatch } from 'react-router-dom';
import OrganizationsTable from '../../components/containers/tables/table-organizations';
import SingleOrganization from './organization-singal';
import OrganizationModalDialog from '../../components/containers/main/forms/organization-popup';

const Organizations = () => {
    const {path, url} = useRouteMatch();

    var [popState, setPopState] = useState(true);

    const changePannelState = () => {
        console.log('POP 1- '+popState);
        if(popState===true){popState=false;}
        else if(popState===false){popState=true;}
        // setPopState(!popState);
        console.log(popState);
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
            <div className="container-header">
                    <h2>Organization Related Options</h2>
                    <p>Dashboard consist of necessary settings for admins and paticular management roles.</p>
                </div>

                <div className="cards">
                    <OrganizationModalDialog/>
                </div>

                <div className="container-header">
                    <h2>Organizations Brief </h2>
                    <p>Dashboard consist of necessary settings for admins and paticular management roles.</p>
                </div>

                <br></br>

                <Switch>
                    <Route path={path} exact component={OrganizationsTable}/>
                    <Route path={`${path}/organization`} exact component={SingleOrganization}/>
                </Switch>
                
            
        </>
    );
}

export default Organizations;