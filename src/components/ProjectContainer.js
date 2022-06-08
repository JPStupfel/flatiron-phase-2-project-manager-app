import UserCard from "./UserCard"
import React from "react"
import ProjectCard from "./ProjectCard"
import AddProject from "./AddProject"


export default function ProjectContainer({
    projects, 
    onClickDeleteButton, 
    onEditProject, 
    addProject,
    setAddProject,
    onAddNewProject,
    onCancelAdd,

}){

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
            <AddProject
          addProject={addProject}
          setAddProject={setAddProject}
          onAddNewProject={onAddNewProject}
          onCancelAdd={onCancelAdd}
           />
        </div>
    )
}