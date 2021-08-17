import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route path="/" exact component={Register} />
           <Route path="/Login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

