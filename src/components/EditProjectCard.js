import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function EditProjectCard({project, handleClickEdit}){

    const [newProject, setNewProject] = useState(project)

    function handleChangeInput(event){
        const updatedProject = {...newProject, [event.target.name]: event.target.value}
        setNewProject(updatedProject)
        console.log(updatedProject)



    }

    function handleSubmit(event){
        event.preventDefault()
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

        <input 
        name='status' 
        value={newProject.status}
        onChange={handleChangeInput}

        ></input>

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
