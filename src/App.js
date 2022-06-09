import logo from './logo.svg';
import {React, useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/Navbar';
import CardContainer from './components/CardContainer';
import  './App.css';
import ProjectContainer from './components/ProjectContainer';
import AddProject from './components/AddProject';
import AddUser from './components/AddUser';



function App() {

  const [userList, setUserList] = useState([])

  const [projects, setProjects] = useState([])
  

  
//fetch users
  useEffect( 
    ()=>{fetch('http://localhost:4000/users').then(r=>r.json()).then(d=>setUserList(d))},[]
  )

  // fetch projects
  useEffect( 
    ()=>{fetch('http://localhost:4000/projects').then(r=>r.json()).then(d=>setProjects(d))},[]
  )


 
//helper functions for Projects Page
  function onClickDeleteButton(id){
    const updatedProjectList = projects.filter(e=>e.id!==id)
    setProjects(updatedProjectList)
  }

  function onEditProject(obj){
    const updatedProjectList = projects.map(e=> e.id===obj.id ? obj : e);
    setProjects(updatedProjectList)

  }

  function onAddNewProject(newProject){
    const updatedProjectList = [...projects, newProject]
    setProjects(updatedProjectList)
  }

 
//helper functions for users page

  function onAddNewUser(newUser){
    const newUserList = [...userList, newUser]
    setUserList(newUserList)
    console.log('Added User')
  }

  function handleDeleteUser(id){
    console.log('handleDeleteUser')
    const newUserList = userList.filter(e=>e.id !== id)
    setUserList(newUserList)
  
  }
  

 
  

  

  return (
    <>
    <NavBar />
    <Switch>
    

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/users">
        <CardContainer
        userList={userList}
        onAddNewUser={onAddNewUser}
        handleDeleteUser={handleDeleteUser}
         />
       

  

      </Route>

      <Route path="/projects">

          <ProjectContainer 
          projects={projects}
          onClickDeleteButton={onClickDeleteButton}
          onEditProject={onEditProject}
          onAddNewProject={onAddNewProject}
          userList={userList}
           />

          

      </Route>

      </Switch>
    </>

  );
}

export default App;
