import UserCard from "./UserCard";
import React from "react"
import AddUser from "./AddUser";


export default function CardContainer({userList}){

    const userCards = userList.map(e=><UserCard key={e.id} user={e}/>)
    
    return(
        <>
        {userCards}
        <AddUser />
        </>
    )
}