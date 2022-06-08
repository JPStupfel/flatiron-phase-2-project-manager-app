import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function AddUserForm({onAddNewUser, onCancelAddUser, setAddUser}){


    const [newUser, setNewUser] = useState({name:'', author: '', status:'' })

    function handleChangeInput(event){
        const updatedUser = {...newUser, [event.target.name]: event.target.value}
        setNewUser(updatedUser)

    }

    function handleSubmit(event){
        event.preventDefault()

        fetch('http://localhost:4000/Projects', {
            method: "POST",
            headers: {'Content-Type':'application/json',"Accept": 'application/json'},
            body: JSON.stringify(newUser)
        }).then(r=>r.json()).then(d=>onAddNewUser(d));

        setAddUser(false)


    }

    //pass down an updater function from app to update projects in app component
    //pass users and make user input a drop down

    return(
        
    <Form
    onSubmit={handleSubmit} 
    >

        <Form.Group 
        className="mb-3" 
        
        >
            <Form.Label>User Name</Form.Label>

            <Form.Control 
            name={'name'}  
            type="text" 
            placeholder="Enter Project Name" 
            value={newUser.name}
            onChange={handleChangeInput}/>
           

            <Form.Text className="text-muted">
            Give your User a memorable, but informative name!
            </Form.Text>
        </Form.Group>

        <Form.Group    
        className="mb-3" 
        >
            <Form.Label>Who is Creating this User?</Form.Label>
            <Form.Control 
            name='author' 
            type="text" 
            placeholder="Enter Project Author"
            onChange={handleChangeInput}
            value={newUser.author}
            />
        
        </Form.Group>

        <Form.Group 
        className="mb-3" 
        >
            <Form.Label>What is the status of this User?</Form.Label>
            <Form.Control 
            name='status' 
            type="text" 
            placeholder="Enter User Status"
            onChange={handleChangeInput}  
            />
        </Form.Group>


        <Button 
        variant="primary" type="submit">
            Submit
        </Button>
        <Button
        onClick={onCancelAddUser}
        variant="primary" type="text">
            Cancel
        </Button>

    </Form>
    )
}
