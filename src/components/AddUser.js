import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AddProjectForm from "./AddProjectForm";
import AddUserForm from "./AddUserForm";

export default function AddUser({onAddNewUser, onCancelAddUser}){

    const [addUser, setAddUser] = useState(false)


    function onCancelAddUser() {
    setAddUser(false)
  }

  

  //if add user is false, show add user button, if add user is true, show add user form
    return(
        <div>
            
            {!addUser ? 
           
            <div className="d-grid gap-2">
            <Button 
            className='add-something-button'
            variant="primary" 
            size="lg"
            onClick={()=>setAddUser((prev)=>!prev)}>
            Add New Team Member
            </Button>
            </div>



            : 
            <AddUserForm 
            onCancelAddUser={onCancelAddUser}
            onAddNewUser={onAddNewUser}
            setAddUser={setAddUser}
            /> }
        </div>
    )
}