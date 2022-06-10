import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AddUser from "./AddUser";

export default function AddUserForm({onAddNewUser, onCancelAddUser, setAddUser}){


    const [newUser, setNewUser] = useState({'name':'', 'image': '', })

    function handleChangeInput(event){
        const updatedUser = {...newUser, [event.target.name]: event.target.value}
        setNewUser(updatedUser)

    }

    function handleSubmit(event){
        event.preventDefault()

        fetch('http://localhost:4000/users', {
            method: "POST",
            headers: {'Content-Type':'application/json',"Accept": 'application/json'},
            body: JSON.stringify(newUser)
        }).then(r=>r.json()).then(d=>onAddNewUser(d));

        setAddUser(false)


    }


    return(<>
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
            placeholder="Enter User Name" 
            value={newUser.name}
            onChange={handleChangeInput}/>
           

            <Form.Text className="text-muted">
            Give your User a memorable, but informative name!
            </Form.Text>
        </Form.Group>

        <Form.Group    
        className="mb-3" 
        >
            <Form.Label>image URL</Form.Label>
            <Form.Control 
            name='image' 
            type="text" 
            placeholder="Provide an image URL"
            onChange={handleChangeInput}
            value={newUser.author}
            />
        
        </Form.Group>



        <Button 
        variant="primary" type="submit">
            Submit
        </Button>
        
    </Form>

    <Button
    onClick={onCancelAddUser}
    variant="primary" type="text">
        Cancel
    </Button>
    </>
    )
}
