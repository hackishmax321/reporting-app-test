//import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/home';
import NavBar from './components/containers/navbar/navbar';
import Main from './routes/dashboard/main';
import Map from './routes/map';
import { useState } from 'react';

function App() {

  console.log = console.warn = console.error = () => {};
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>  
          <Route path='/home' exact component={Home}/>
          <Route path='/map' exact component={Map}/>
          <Route path='/dashboard' component={Main}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
