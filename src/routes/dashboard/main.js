import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import UserTable from '../../components/containers/tables/table-user';
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


        </>
    );
}

export default Main;
