import UserCard from "./UserCard";
import React from "react"
import AddUser from "./AddUser";


export default function CardContainer({userList, onCancelAddUser, onAddNewUser}){

    const userCards = userList.map(e=><UserCard key={e.id} user={e}/>)
    
    return(
        <>
        {userCards}
        <AddUser
        onCancelAddUser={onCancelAddUser}
        onAddNewUser={onAddNewUser}
         />
        </>
    )
}