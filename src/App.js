import logo from './logo.svg';
import {React, useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/Navbar';
import CardContainer from './components/CardContainer';
import  './App.css';
import ProjectContainer from './components/ProjectContainer';
import AddProject from './components/AddProject';



function App() {

  const [userList, setUserList] = useState([])
  const [projects, setProjects] = useState([])
  const [addProject, setAddProject] = useState(false)
  

  useEffect( 
    ()=>{fetch('http://localhost:4000/users').then(r=>r.json()).then(d=>setUserList(d))},[]
  )

  useEffect( 
    ()=>{fetch('http://localhost:4000/projects').then(r=>r.json()).then(d=>setProjects(d))},[]
  )


  function onAddNewProject(newProject){
    const updatedProjectList = [...projects, newProject]
    setProjects(updatedProjectList)
    setAddProject(false)
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
      </Route>

      <Route path="/projects">

          <ProjectContainer 
          projects={projects} />

          <AddProject
          addProject={addProject}
          setAddProject={setAddProject}
          onAddNewProject={onAddNewProject}
           />

      </Route>

      </Switch>
    </>

  );
}

export default App;
