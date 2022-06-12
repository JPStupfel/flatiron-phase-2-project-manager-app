import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AddUser from "./AddUser";

export default function Login({onAddloginUser, onCancelAddUser}){


    const [loginUser, setLoginUser] = useState({'name':'','password': '' })

    function handleChangeInput(event){
        const updatedUser = {...loginUser, [event.target.name]: event.target.value}
        setLoginUser(updatedUser)

    }

    function handleSubmit(event){
        event.preventDefault()
        console.log('will log in',loginUser)

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
            value={loginUser.name}
            onChange={handleChangeInput}/>
           

            <Form.Text className="text-muted">
            Give your User a memorable, but informative name!
            </Form.Text>
        </Form.Group>


        <Form.Group    
        className="mb-3" 
        >
            <Form.Label>Password</Form.Label>
            <Form.Control 
            name='password' 
            type="text" 
            placeholder="Provide password"
            onChange={handleChangeInput}
            value={loginUser.password}
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
