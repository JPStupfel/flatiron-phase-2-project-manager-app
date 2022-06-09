import UserCard from "./UserCard";
import React from "react"
import AddUser from "./AddUser";


export default function CardContainer({handleDeleteUser, userList, onAddNewUser}){

    const userCards = userList.map(e=><UserCard handleDeleteUser={handleDeleteUser} key={e.id} user={e}/>)
    
    return(
        <>
        {userCards}
        <AddUser
        onAddNewUser={onAddNewUser}
         />
        </>
    )
}