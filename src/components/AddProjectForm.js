import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import StatusDropDown from "./StatusDropDown";
import UserDropDown from "./UserDropDown";

export default function AddProjectForm({onCancelAdd, onAddNewProject, setAddProject, userList}){

    const [newProject, setNewProject] = useState({name:'', author: '', status:'' })

    function handleChangeInput(event){
        const updatedProject = {...newProject, [event.target.name]: event.target.value}
        setNewProject(updatedProject)

    }

    function onSetStatus(status){
        const updatedProject = {...newProject, 'status': status}
        setNewProject(updatedProject)
    }

    function onSetUser(user){
        const updatedProject = {...newProject, 'author': user}
        setNewProject(updatedProject)
    }

    function handleSubmit(event){
        event.preventDefault()

        fetch('http://localhost:4000/Projects', {
            method: "POST",
            headers: {'Content-Type':'application/json',"Accept": 'application/json'},
            body: JSON.stringify(newProject)
        }).then(r=>r.json()).then(d=>onAddNewProject(d));

        setAddProject(false)


    }

    //const users = userList.map(e=><>{e.name}</>)

    return(
    <>
    <Form
    onSubmit={handleSubmit} 
    >

        <Form.Group 
        className="mb-3"      
        >
            <Form.Label>Project Name</Form.Label>
            <Form.Control 
            name={'name'}  
            type="text" 
            placeholder="Enter Project Name" 
            value={newProject.name}
            onChange={handleChangeInput}/>
           

            <Form.Text className="text-muted">
            Give your project a memorable, but informative name!
            </Form.Text>

        </Form.Group>

      

        <UserDropDown
        buttonTitle={newProject.author}
        onSetUser={onSetUser} userList={userList} />

        <StatusDropDown
        buttonTitle={newProject.status}
        onSetStatus={onSetStatus} />




        <Button 
        variant="primary" type="submit">
            Submit
        </Button>
       
    </Form>
     <Button
     onClick={onCancelAdd}
     variant="primary" type="text">
         Cancel
     </Button>
     </>
    )
}
