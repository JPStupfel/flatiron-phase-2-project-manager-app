import React from "react"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

//pass this function a set helper function to update state and the current state.[fill in the title] as a prop so it can update the title shown on the button. Also needs User list to generate menu options



export default function UserDropDown({onSetUser, buttonTitle, userList}){


    const menuItems = userList.map(
        e=>
        <Dropdown.Item
         key={e.id}
         href="#/action-1"
         onClick={(event)=>onSetUser(event.target.textContent)}
         >{e.name}</Dropdown.Item>
    )



    return(
    <DropdownButton style={{'border-style': 'solid'}} variant="light" id="dropdown-basic-button" title={buttonTitle ? `Creator: ${buttonTitle}` : 'Project Creator: Choose an existing User!'}>

       {menuItems}

    </DropdownButton>
    )
}