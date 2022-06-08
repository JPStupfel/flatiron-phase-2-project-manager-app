import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";


export default function NavBar() {
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

    return (
        <>

          <NavLink
          to="/"
          exact
          >
          home
          </NavLink>

          <div></div>

          <NavLink
          to="/users"
          exact
          >
          Users
          </NavLink>

          <div></div>

          <NavLink
          to="/projects"
          exact
          >
          Projects
          </NavLink>

    

        </>
          
    )}