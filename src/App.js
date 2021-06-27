import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './routes/home';
import NavBar from './components/containers/navbar/navbar';
import SideBar from './components/containers/sidebar/sidebar';
import Main from './routes/dashboard/main';
import DashboardMain from './components/containers/main/main';
import { useState } from 'react';

function App() {
  


  return (
    <div className="App">
      <Router>
        <NavBar/>
        <SideBar/>
        <DashboardMain/>
        <Switch>
          <Route path="/" component={Home}/>  
          <Route path="/home" exact component={Home}/>
          <Route path="/dashboard" exact component={Main}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
