import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AddProjectForm from "./AddProjectForm";

export default function AddUser({onAddNewProject, onCancelAdd}){

    const [addUser, setAddUser] = useState(false)


    return(
        <div>
            <button 
            onClick={()=>setAddUser((prev)=>!prev)}>
            {!addUser? 'Add New User' : 'Cancel Adding Project'}
            </button>
            <>{addUser ? <AddProjectForm onCancelAdd={onCancelAdd} onAddNewProject={onAddNewProject}/> : <></>}</>
        </div>
    )
}