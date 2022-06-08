import UserCard from "./UserCard";
import React from "react"


export default function CardContainer({userList}){

    const userCards = userList.map(e=><UserCard key={e.id} user={e}/>)
    
    return(
        <>{userCards}</>
    )
}