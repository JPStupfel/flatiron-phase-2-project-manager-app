import UserCard from "./UserCard"
import React, {useState} from "react"
import ProjectCard from "./ProjectCard"
import AddProject from "./AddProject"


export default function ArchiveContainer({
    projects, 
    onClickDeleteButton, 
    onEditProject, 
    userList,
    onAddNewProject,

}){


    const CompleteProjects = projects.filter(e=>e.status === 'Completed')

    const projectCards = CompleteProjects.map(
        e=>
        <ProjectCard
         key={e.id} 
         project={e}
         onClickDeleteButton={onClickDeleteButton}
         onEditProject={onEditProject}
         userList={userList}
         />
        )

  


    
    return(
        <div>
            <h1>Completed Projects</h1>
            {projectCards}
        </div>
    )
}