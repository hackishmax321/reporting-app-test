import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import UsersTable from '../../components/containers/tables/table-users';
import Chips from '../../components/containers/chips/chips';

function Main(){
    let { path, url } = useRouteMatch();
    const [sidenav, setSideNav] = useState(true);

    const showSideNav = () => {
        setSideNav(!sidenav);
    }
    return (
        <>
                <div className="container-header">
                    <h2>Essential Links</h2>
                    <p>Dashboard consist of necessary settings for admins and paticular management roles.</p>
                    <Chips type="normal" values={[{title: "Trebding Link 01", link: '/link1'}, {title: "Trebding Link 02", link: '/link2'}]} />
                </div>

                <br></br>
                <div className="container-header">
                    <h2>Dashboard</h2>
                    <p>Dashboard consist of necessary settings for admins and paticular management roles.</p>
                </div>

                <br></br>

                <div className="card">
                    <UsersTable/>
                </div>

                <br></br>

                <div className="card">
                    <i class="fas fa-spinner font-special"></i>
                        
                    <div className="card-content">
                        <h4>[SIMPLE TITLE]</h4>
                        <p>Card consist of necessary options in a inateractive manner.</p>
                    </div>
                </div>


        </>
    );
}

export default Main;
