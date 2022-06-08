import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function EditProjectCard({project, handleClickEdit}){

    const [newProject, setNewProject] = useState({name:'', author: '', status:'' })

    function handleChangeInput(event){
        const updatedProject = {...newProject, [event.target.name]: event.target.value}
        setNewProject(updatedProject)

    }

    function handleSubmit(event){
        event.preventDefault()
    }

   
    return(
        
    <Form
    onSubmit={handleSubmit} 
    >
        <input value={project.name}></input>
        <div></div>
        <input value={project.author}></input>
        <div></div>

        <input value={project.status}></input>
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
