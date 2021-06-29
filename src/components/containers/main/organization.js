import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import './main.css';
import UsersTable from '../tables/table-users';
import OrganizationForm from './forms/organization-form';
import OrganizationsTable from '../tables/table-organizations';

const DashboardOrganization = () => {
    const {path, url} = useRouteMatch();

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

                <br></br>

                <div className="container-header">
                    <h2>Organizations Brief </h2>
                    <p>Dashboard consist of necessary settings for admins and paticular management roles.</p>
                </div>

                <br></br>

                <div className="card">
                    <Router>
                        <Route path={path} exact component={OrganizationsTable}/>
                        <Route path={`${path}/form`} exact component={OrganizationForm}/>
                    </Router>
                </div>

                <br></br>

                <div className="card">
                    
                </div>
            </div>

        </>
    );
}

export default DashboardOrganization;