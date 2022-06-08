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
  const [addUser, setAddUser] = useState(false)

  const [projects, setProjects] = useState([])
  

  
//fetch users
  useEffect( 
    ()=>{fetch('http://localhost:4000/users').then(r=>r.json()).then(d=>setUserList(d))},[]
  )

  // fetch projects
  useEffect( 
    ()=>{fetch('http://localhost:4000/projects').then(r=>r.json()).then(d=>setProjects(d))},[]
  )


 

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

 

  

 


  

  return (
    <>
    <NavBar />
    <Switch>
    

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/users">
        <CardContainer userList={userList} />
        <AddUser
          addUser={addUser}
          setAddUser={setAddUser}
           />

  

      </Route>

      <Route path="/projects">

          <ProjectContainer 
          projects={projects}
          onClickDeleteButton={onClickDeleteButton}
          onEditProject={onEditProject}
          onAddNewProject={onAddNewProject}
           />

          

      </Route>

      </Switch>
    </>

  );
}

export default App;
