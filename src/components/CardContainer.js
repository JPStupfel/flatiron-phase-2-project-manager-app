import UserCard from "./UserCard";
import React from "react"
import AddUser from "./AddUser";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default function CardContainer({handleDeleteUser, userList, onAddNewUser, projects, currentUser}){

    const userCards = userList.map(e=><UserCard projects={projects} handleDeleteUser={handleDeleteUser} key={e.id} user={e} currentUser={currentUser}/>)
    
    return(
        <>
        
        <Row style={{'display': 'flex'}} xs={2} md={4} className="g-4">
            {userCards}
        </Row>





        <AddUser
        onAddNewUser={onAddNewUser}
         />
        </>
    )
}