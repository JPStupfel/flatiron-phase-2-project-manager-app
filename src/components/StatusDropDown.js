import React from "react"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


export default function StatusDropDown({onSetStatus, buttonTitle}){
    console.log(buttonTitle.status)
    return(
    <DropdownButton id="dropdown-basic-button" title={buttonTitle.status ? buttonTitle.status : 'select'}>

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