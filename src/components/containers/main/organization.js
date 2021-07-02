import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import './main.css';
import UsersTable from '../tables/table-users';
import OrganizationsTable from '../tables/table-organizations';
import OrganizationSingle from './organization-single';
import OrganizationForm from './forms/organization-form';
import EventEmitter from '../../../utils/EventEmitter';

const DashboardOrganization = () => {
    const {path, url} = useRouteMatch();

    const openLogPannel = () => {
        console.log("FHFHJ");
        EventEmitter.emit("closePannel", {close:true});
    }

    return (
        <>
            <div className="container-dashboard">
                <div className="container-header">
                    <h2>Organizations</h2>
                    <p>Dashboard consist of necessary settings for admins and paticular management roles.</p>
                </div>

                <div className="cards">
                    <div className="card">
                        <i class="fas fa-envelope-open-text"></i>
                        
                        <div className="card-content">
                            <h4>Add Organization</h4>
                            <p>Card consist of necessary options in a inateractive manner.</p>
                            <a className="btn btn-primary" onClick={openLogPannel}>ADD</a>
                        </div>
                    </div>
                </div>
                {/* <div className="container-header">
                    <h2>Organizations</h2>
                    <p>Dashboard consist of necessary settings for admins and paticular management roles.</p>
                </div>

                <div className="cards">
                    <div className="card">
                        <i class="fas fa-envelope-open-text"></i>
                        
                        <div className="card-content">
                            <h4>Add Organization</h4>
                            <p>Card consist of necessary options in a inateractive manner.</p>
                            <Link to={`${url}/form`}><button className="btn btn-primary">VISIT</button></Link>
                        </div>
                    </div>
                    <div className="card">
                        <i class="fas fa-newspaper"></i>
                        
                        <div className="card-content">
                            <h4>News</h4>
                            <p>Card consist of necessary options in a inateractive manner.</p>
                        </div>
                    </div>
                    <div className="card">
                        <i class="fas fa-chart-line"></i>
                        
                        <div className="card-content">
                            <h4>Activities</h4>
                            <p>Card consist of necessary options in a inateractive manner.</p>
                        </div>
                    </div>
                    <div className="card">
                        <i class="fas fa-history"></i>
                        
                        <div className="card-content">
                            <h4>History</h4>
                            <p>Card consist of necessary options in a inateractive manner.</p>
                        </div>
                    </div>
                </div>

                <br></br> */}

                <div className="container-header">
                    <h2>Organizations Brief </h2>
                    <p>Dashboard consist of necessary settings for admins and paticular management roles.</p>
                </div>

                <br></br>

                
                <Router>
                    <Switch>
                        <Route path={path} exact component={OrganizationsTable}/>
                        {/* <Route path={`${path}/form`} exact component={OrganizationForm}/> */}
                        <Route path={`${path}/organization`} component={OrganizationSingle}/>
                    </Switch>
                </Router>
                


                {/* <OrganizationForm /> */}
            </div>

        </>
    );
}

export default DashboardOrganization;