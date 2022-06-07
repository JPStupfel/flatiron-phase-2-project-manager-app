import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';



function App() {
  return (
    <Switch>
    

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/users">
        <UserCard />
      </Route>

      </Switch>

  );
}

export default App;
