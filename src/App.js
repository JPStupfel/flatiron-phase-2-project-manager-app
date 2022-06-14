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
import ArchiveContainer from './components/ArchiveContainer';
import Login from './components/LogIn';



function App() {

  const [userList, setUserList] = useState([])

  const [projects, setProjects] = useState([])

  const [currentUser, setCurrentUser] = useState('')

  

  //use effect for on each load of app component because otherwise upon refresh currentuser state will forget
  

  
//fetch users
  useEffect( 
    ()=>{fetch('http://localhost:4000/users').then(r=>r.json()).then(d=>setUserList(d))},[]
  )

  // fetch projects
  useEffect( 
    ()=>{fetch('http://localhost:4000/projects').then(r=>r.json()).then(d=>setProjects(d))},[]
  )


  useEffect(

    //only if user in session storage is either on the userList or is Admin, both with correct password, setCurrentUser to that upon refresh
    ()=>{
    const newCurrentUser =  sessionStorage.token ? JSON.parse(sessionStorage.token) : '';

    const  isAdmin = newCurrentUser.name === 'admin' && newCurrentUser.password === '123'

    const user = userList.filter(e=>e.name===newCurrentUser.name)[0]

    const isUser = user && user.password === newCurrentUser.password 

    isUser || isAdmin ? setCurrentUser(newCurrentUser) : setCurrentUser('')
    },[]
     
  )


  //helper functions for logging in and out

  function handleLogout(){
    sessionStorage.setItem('token', '');
    setCurrentUser('')
  }

  function handleUserLogin(obj){
    sessionStorage.setItem('token', JSON.stringify(obj));
    setCurrentUser(obj)
  }
 
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
  }

  function handleDeleteUser(id){
    const newUserList = userList.filter(e=>e.id !== id)
    setUserList(newUserList)
  
  }



  

  let images = userList.map(e=>e.image)

  console.log(images)
  return (
    <>
    <NavBar handleLogout={handleLogout} currentUser={currentUser} className='html' />
    
    
    <Switch>
    

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/users">
        <CardContainer
        userList={userList}
        onAddNewUser={onAddNewUser}
        handleDeleteUser={handleDeleteUser}
        projects={projects}
         />
       

  

      </Route>

      <Route path="/projects">

          <ProjectContainer 
          projects={projects}
          onClickDeleteButton={onClickDeleteButton}
          onEditProject={onEditProject}
          onAddNewProject={onAddNewProject}
          userList={userList}
          currentUser={currentUser}
          
           />

          

      </Route>

      <Route path="/archives">

      <ArchiveContainer 
      projects={projects}
      onClickDeleteButton={onClickDeleteButton}
      onEditProject={onEditProject}
      onAddNewProject={onAddNewProject}
      userList={userList}
      currentUser={currentUser}

      />


      

      </Route>
      <Route path="/login">
      <Login handleUserLogin={handleUserLogin} userList={userList} />
      </Route>


      </Switch>
    </>

  );
}

export default App;
