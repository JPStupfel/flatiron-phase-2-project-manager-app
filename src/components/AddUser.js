import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AddProjectForm from "./AddProjectForm";
import AddUserForm from "./AddUserForm";

export default function AddUser({onAddNewUser, onCancelAddUser}){

    const [addUser, setAddUser] = useState(false)


    return(
        <div>
            <button 
            onClick={()=>setAddUser((prev)=>!prev)}>
            {!addUser? 'Add New User' : 'Cancel Adding Project'}
            </button>
            <>{addUser ? 
            <AddUserForm 
            onCancelAddUser={onCancelAddUser}
            onAddNewUser={onAddNewUser}
            setAddUser={setAddUser}
            /> : <></>}</>
        </div>
    )
}