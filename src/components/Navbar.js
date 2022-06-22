import React, {useState} from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import  '../App.css';



export default function NavBar({currentUser, handleLogout}) {
    
    const [navColor, setNavColor] = useState(true)

    function handleNavButClick(event){
    (prev =>setNavColor(!prev))(navColor)
    console.log(navColor)
    }

    return (

      <>
      <button onClick={handleNavButClick}>Change Navbar Color to {navColor? 'green' : 'red'}</button>
    <div style={{
      'backgroundColor': navColor?'red':'green'}}>
      <Nav fill variant="tabs" >
      <Nav.Item >
        <Nav.Link href="/" eventKey="/">HOME</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link  href="/users" eventKey="/users" >TEAM MEMBERS
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href='/projects' eventKey="/projects">PROJECTS</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href='/archives' eventKey="/archives">COMPLETED PROJECTS</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        {currentUser ? 
        <>Logged in as {currentUser.name}
        <button onClick={handleLogout}>logout</button></>
        :
        <Nav.Link href='/login' eventKey="/login">Login</Nav.Link>
        }
      </Nav.Item>
    </Nav>
    </div>

        </>
          
    )}

    