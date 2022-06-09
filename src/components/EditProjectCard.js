import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import StatusDropDown from "./StatusDropDown";

export default function EditProjectCard({project, handleClickEdit, handlePatch}){

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

        <input
        name='author' 
        value={newProject.author}
        onChange={handleChangeInput}

        ></input>

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
