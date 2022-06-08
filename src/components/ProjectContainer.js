import UserCard from "./UserCard"
import React from "react"
import ProjectCard from "./ProjectCard"


export default function ProjectContainer({projects, onClickDeleteButton}){

    const projectCards = projects.map(
        e=>
        <ProjectCard
         key={e.id} 
         project={e}
         onClickDeleteButton={onClickDeleteButton}
         />
        )
    
    return(
        <div>
            <h1>Projects</h1>
            {projectCards}
        </div>
    )
}