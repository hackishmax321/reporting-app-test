import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/home';
import NavBar from './components/containers/navbar/navbar';
import Main from './routes/dashboard/main';
import Map from './routes/map';
import { useState } from 'react';

function App() {
  


  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" component={Main}/>  
          <Route path="/home" exact component={Home}/>
          <Route path="/map" exact component={Map}/>
          <Route path="/admin" exact component={Main}/>
          <Route path="/dashboard" component={Main}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
