import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AddProjectForm from "./AddProjectForm";

export default function AddProject({addProject, setAddProject, onAddNewProject, onCancelAdd}){


    return(
        <div>
            <button 
            onClick={()=>setAddProject((prev)=>!prev)}>
            {!addProject? 'Add New Project' : 'Cancel Adding Project'}
            </button>
            <>{addProject ? <AddProjectForm onCancelAdd={onCancelAdd} onAddNewProject={onAddNewProject}/> : <></>}</>
        </div>
    )
}