import React, { useEffect } from 'react';
import './main.css';
import UserTable from '../tables/table-user';

const DashboardMain = () => {


    return (
        <>
            <div className="container-dashboard">
                {/* <div className="container-header">
                    <h2>Dashboard</h2>
                    <p>Dashboard consist of necessary settings for admins and paticular management roles.</p>
                </div> */}

                {/* <div className="cards">
                    <div className="card">
                        <i class="fas fa-envelope-open-text"></i>
                        
                        <div className="card-content">
                            <h4>Messages</h4>
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
                </div> */}

                {/* <br></br> */}

                <div className="container-header">
                    <h2>Dashboard</h2>
                    <p>Dashboard consist of necessary settings for admins and paticular management roles.</p>
                </div>

                <br></br>

                <div className="card">
                    <UserTable />
                </div>

                <br></br>

                <div className="card">
                    <i class="fas fa-spinner font-special"></i>
                        
                    <div className="card-content">
                        <h4>[SIMPLE TITLE]</h4>
                        <p>Card consist of necessary options in a inateractive manner.</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default DashboardMain;
