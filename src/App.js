import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/Navbar';


function App() {
  return (
    <>
    <NavBar />
    <Switch>
    

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/users">
        <UserCard />
      </Route>

      </Switch>
    </>

  );
}

export default App;
