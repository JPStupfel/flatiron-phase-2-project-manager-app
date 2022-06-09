import UserCard from "./UserCard"
import React, {useState} from "react"
import ProjectCard from "./ProjectCard"
import AddProject from "./AddProject"


export default function ProjectContainer({
    projects, 
    onClickDeleteButton, 
    onEditProject, 
    userList,
    onAddNewProject,

}){

    const [addProject, setAddProject] = useState(false)


    const projectCards = projects.map(
        e=>
        <ProjectCard
         key={e.id} 
         project={e}
         onClickDeleteButton={onClickDeleteButton}
         onEditProject={onEditProject}
         userList={userList}
         />
        )

        function onCancelAdd(){
            setAddProject(false)
          }


    
    return(
        <div>
            <h1>Projects</h1>
            {projectCards}
            <AddProject
          addProject={addProject}
          setAddProject={setAddProject}
          onAddNewProject={onAddNewProject}
          onCancelAdd={onCancelAdd}
          userList={userList}
           />
        </div>
    )
}