import React from 'react';
import '../components/containers/main/main.css';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <>

            <div className="container-flex">
            <br></br><br></br><br></br><br></br><br></br><br></br>
                <h2>Welcome to demonstration of reporting app</h2>
                <div className="card">
                        <i class="fas fa-envelope-open-text"></i>
                        
                        <div className="card-content">
                            <h4>Dashboard</h4>
                            <p>Card consist of necessary options in a inateractive manner.</p>
                            <Link to="/dashboard"><button className="btn btn-primary">VISIT</button></Link>
                        </div>
                </div>
            </div>


        </>
    );
}

export default Home;
