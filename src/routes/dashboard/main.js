import React, { useState } from 'react';
import SideBar from '../../components/containers/sidebar/sidebar';

function Main(){
    const [sidenav, setSideNav] = useState(true);

    const showSideNav = () => {
        setSideNav(!sidenav);
    }
    return (
        <>HFF
         <SideBar showSideBar={showSideNav}/>
        </>
    );
}

export default Main;
