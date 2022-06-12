import UserCard from "./UserCard"
import React, {useState} from "react"
import ProjectCard from "./ProjectCard"
import AddProject from "./AddProject"
import '../App.css';




export default function ProjectContainer({
    projects, 
    onClickDeleteButton, 
    onEditProject, 
    userList,
    onAddNewProject,
    currentUser

}){
    let x = currentUser
    const [addProject, setAddProject] = useState(false)

    const notCompleteProjects = projects.filter(e=>e.status !== 'Completed')

    const projectCards = notCompleteProjects.map(
        e=>
        <ProjectCard
         key={e.id} 
         project={e}
         onClickDeleteButton={onClickDeleteButton}
         onEditProject={onEditProject}
         userList={userList}
         currentUser={currentUser}
         />
        )


        const onHoldCards = notCompleteProjects.map(
            e=> e.status==="On Hold" ?
            <ProjectCard
             key={e.id} 
             project={e}
             onClickDeleteButton={onClickDeleteButton}
             onEditProject={onEditProject}
             userList={userList}
             /> : null
            )

            const readyToStartCards = notCompleteProjects.map(
                e=> e.status==="Ready to Start" ?
                <ProjectCard
                 key={e.id} 
                 project={e}
                 onClickDeleteButton={onClickDeleteButton}
                 onEditProject={onEditProject}
                 userList={userList}
                 /> : null
                )

                const workingOnItCards = notCompleteProjects.map(
                    e=> e.status==="Working On It" ?
                    <ProjectCard
                     key={e.id} 
                     project={e}
                     onClickDeleteButton={onClickDeleteButton}
                     onEditProject={onEditProject}
                     userList={userList}
                     /> : null
                    )
                

                        console.log('project container', currentUser)
        function onCancelAdd(){
            setAddProject(false)
          }


    
    return(
        <div className='App'>
            <h1>Projects</h1>
            <h2 >On Hold</h2>
                {onHoldCards}
            <h2>Ready to Start</h2>
                {readyToStartCards}
            <h2>Working on It</h2>

            {workingOnItCards}

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