import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/home';
import SignUpSide from './routes/register';
import NavBar from './components/containers/navbar/navbar';
import ResponsiveDrawer from './routes/dashboard/sidebar-material';
import { theme } from './styles/temp_style';

function App() {

  console.log = console.warn = console.error = () => {};
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>  
          <Route path='/home' exact component={Home}/>
          <Route path='/register' exact component={SignUpSide}/>
          <Route path='/dashboard' component={ResponsiveDrawer}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
