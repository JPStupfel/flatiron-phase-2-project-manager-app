import UserCard from "./UserCard"
import React from "react"
import ProjectCard from "./ProjectCard"


export default function ProjectContainer({projects, onClickDeleteButton, onEditProject}){

    const projectCards = projects.map(
        e=>
        <ProjectCard
         key={e.id} 
         project={e}
         onClickDeleteButton={onClickDeleteButton}
         onEditProject={onEditProject}
         />
        )
    
    return(
        <div>
            <h1>Projects</h1>
            {projectCards}
        </div>
    )
}