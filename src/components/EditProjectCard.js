import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import StatusDropDown from "./StatusDropDown";
import UserDropDown from "./UserDropDown";

export default function EditProjectCard({project, handleClickEdit, handlePatch, userList}){

    const [newProject, setNewProject] = useState(project)

    function handleChangeInput(event){
        const updatedProject = {...newProject, [event.target.name]: event.target.value}
        setNewProject(updatedProject)

    }

    function handleSubmit(event){
        event.preventDefault();
        handlePatch(newProject)

        handleClickEdit()
    }
   
    function onSetStatus(status){
        const updatedProject = {...newProject, 'status': status}
        setNewProject(updatedProject)
    }

    function onSetUser(user){
        const updatedProject = {...newProject, 'author': user}
        setNewProject(updatedProject)
    }

    console.log(userList)
    return(
        
    <Form
    onSubmit={handleSubmit} 
    >
        <input 
        name='name' 
        value={newProject.name}
        onChange={handleChangeInput}
        ></input>

        <div></div>

        <UserDropDown
        buttonTitle={newProject.author}
        onSetUser={onSetUser} 
        userList={userList} />

        <div></div>

        <StatusDropDown
        buttonTitle={newProject.status}
        onSetStatus={onSetStatus}
        />
        


        <div></div>

        <Button 
        variant="primary" type="button" onClick={handleClickEdit}>
            Cancel
        </Button>

        <Button 
        variant="primary" type="submit">
            Submit
        </Button>

    </Form>
    )
}
