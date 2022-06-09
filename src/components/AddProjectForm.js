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


    return(

    <Form
    className="project-card"
    onSubmit={handleSubmit} 
    >
        <div className="project-list" >
                <h3>
                    <input 
                    name='name' 
                    value={newProject.name}
                    onChange={handleChangeInput}
                    ></input>
                </h3>
                <ul>
                    <li>
                    <UserDropDown
                buttonTitle={newProject.author}
                onSetUser={onSetUser} 
                userList={userList} />
                    </li>
                    <li>
                    <StatusDropDown
                buttonTitle={newProject.status}
                onSetStatus={onSetStatus}
                />
                    </li>
                </ul>               
        </div>


            <div className="project-card-buttons">
                <Button 
                variant="outline-dark" type="button" onClick={onCancelAdd}>
                    Cancel
                </Button>

                <Button 
                variant="outline-dark" type="submit">
                    Submit
                </Button>
            </div>
     </Form>
    )
}


