import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function AddProjectForm(){


    return(
        
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Project Name</Form.Label>
    <Form.Control type="email" placeholder="Enter Project Name" />
    <Form.Text className="text-muted">
      Give your project a memorable, but informative name!
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Who is Creating this Project?</Form.Label>
    <Form.Control type="password" placeholder="Project Author" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>What is the status of this Project?</Form.Label>
    <Form.Control type="password" placeholder="Project Status" />
  </Form.Group>

  

</Form>
    )
}

/*
<Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
*/