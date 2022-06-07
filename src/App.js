import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import { BrowserRouter, Route } from "react-router-dom";



function App() {
  return (
    <>
      <Route path="/">
        <UserCard />
      </Route>
      <Route path="/users">
        <UserCard />
      </Route>
      </>

  );
}

export default App;
