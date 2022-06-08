import UserCard from "./UserCard"
import React from "react"
import ProjectCard from "./ProjectCard"


export default function ProjectContainer({projects}){

    const projectCards = projects.map(e=><ProjectCard key={e.id} project={e}/>)
    
    return(
        <div>
            <h1>Projects</h1>
            {projectCards}
        </div>
    )
}