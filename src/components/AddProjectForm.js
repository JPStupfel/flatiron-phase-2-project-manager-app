import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function AddProjectForm(){

    //create state of new object
    const [newProject, setNewProject] = useState({})

    //make an onchange function
    function handleChangeInput(event){
        const updatedProject = {...newProject, [event.target.name]: event.target.value}
        setNewProject(updatedProject)

    }

    //make form a controlled form using state

    //make post request
    //pass down an updater function from app to update projects in app component
    //pass users and make user input a drop down
console.log(newProject)

    return(
        
    <Form>
        <Form.Group 
        name='name' 
        className="mb-3" 
        onChange={handleChangeInput}
        >
            <Form.Label>Project Name</Form.Label>
            <Form.Control name={'name'}  type="text" placeholder="Enter Project Name" />
            <Form.Text className="text-muted">
            Give your project a memorable, but informative name!
            </Form.Text>
        </Form.Group>

        <Form.Group    
        onChange={handleChangeInput}
        className="mb-3" 
        >
            <Form.Label>Who is Creating this Project?</Form.Label>
            <Form.Control name='author' type="text" placeholder="Enter Project Author" />
        
        </Form.Group>

        <Form.Group 
        onChange={handleChangeInput}  
        className="mb-3" 
        >
            <Form.Label>What is the status of this Project?</Form.Label>
            <Form.Control name='status' type="text" placeholder="Enter Project Status" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>

  

    </Form>
    )
}
