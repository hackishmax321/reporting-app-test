import React from 'react';
import './navbar.css';

const NavBar = ({sidebarOpen, openSidebar}) => {

    return (
        <div className="navbar">
            <div className="nav-icon" onClick={()=>openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>

            <div className="nav-left">
                <a href="#" className="active">MAIN</a>
                <a href="#">MAP</a>
                <a href="#">INFORMATION</a>
                <a href="#">ORGANIZATIONS</a>
            </div>

            <div className="nav-right">
                <a href="#"><i className="fa fa-search"></i></a>
                <a href="#"><i className="fa fa-user"></i></a>

                <div className="nav-user"></div>
            </div>

        </div>
    );

}

export default NavBar;
