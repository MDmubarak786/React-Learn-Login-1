import './App.css';
import Login from './component/Login';
import Home from './component/Home';
import Signin from './component/Sign';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>


        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/Login"><Login /></Route>
          <Route path="/Signin"><Signin /></Route>
        </Switch>


      </Router>
    </div>
  );
}

export default App;
