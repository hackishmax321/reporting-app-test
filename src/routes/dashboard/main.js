import React, { useState } from 'react';
import SideBar from '../../components/containers/sidebar/sidebar';
import DashboardMain from '../../components/containers/main/main';
import Organizations from './organizations';
import Map from '../map';
import Users from './users';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

function Main(){
    let { path, url } = useRouteMatch();
    const [sidenav, setSideNav] = useState(true);

    const showSideNav = () => {
        setSideNav(!sidenav);
    }
    return (
        <>
            <SideBar/>

            <Switch>
                <Route path={path} exact component={DashboardMain}/>
                <Route path={`${path}/users`}exact component={Users}/>
                <Route path={`${path}/map`}exact component={Map}/>
                <Route path={`${path}/organizations`} exact component={Organizations}/>
            </Switch>


        </>
    );
}

export default Main;
