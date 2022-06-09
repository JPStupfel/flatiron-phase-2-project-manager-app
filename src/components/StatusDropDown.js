import React from "react"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

//pass this function a set helper function to update state and the current state as a prop so it can update the title shown on the button

export default function StatusDropDown({onSetStatus, buttonTitle}){
    return(
    <DropdownButton id="dropdown-basic-button" title={buttonTitle.status ? `Status: ${buttonTitle.status}` : 'Status: Choose a Status!'}>

        <Dropdown.Item
         href="#/action-1"
         onClick={(event)=>onSetStatus(event.target.textContent)}
         >On Hold</Dropdown.Item>

        <Dropdown.Item 
        href="#/action-2"
        onClick={(event)=>onSetStatus(event.target.textContent)}
        >Ready to Start</Dropdown.Item>

        <Dropdown.Item 
        href="#/action-3"
        onClick={(event)=>onSetStatus(event.target.textContent)}
        >Working On It</Dropdown.Item>

        <Dropdown.Item 
        href="#/action-3"
        onClick={(event)=>onSetStatus(event.target.textContent)}
        >Completed</Dropdown.Item>

    </DropdownButton>
    )
}