import React from "react";
import  '../App.css';


export default function DisplayProjectCard({project, handleDelete, handleClickEdit, currentUser, onEditProject }){

    const fullDate = (date)=> new Date(date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    const fullTime = (date)=> new Date(date).toLocaleTimeString()

    const buttons= 
                    <>
                    <button onClick={handleClickEdit} >Edit This Project</button>
                    <button onClick={()=>handleDelete(project.id)} >Delete This Project</button>
                    </>

    //const currentUser =  sessionStorage.token ? JSON.parse(sessionStorage.token) : ''
    //const currentUser = ''

    function handleSteal(event){

        const update = {author: currentUser.name}
        console.log(JSON.stringify(update))

        fetch(`http://localhost:4000/projects/${project.id}`,{
            method: 'PATCH', 
            body: JSON.stringify(update),
            headers: {'Content-type':'application/json; charset=UTF-8',}
        }).then(r=>r.json()).then(d=>onEditProject(d)).catch(e=>alert(e))
        
        //console.log('stealing ' + project.id + ' by ' + currentUser.name)
      }

    return(

    <div className="project-card" >
            <div className="project-list">
                <h3>{project.name}</h3>
                <ul>
                    <li>
                        Created by: {project.author}
                    </li>
                    <li>
                        Project Status: {project.status}
                    </li>
                    <li>
                        Date Created: {`${fullDate(project.date)} at ${fullTime(project.date)}`}
                    </li>
                    
                        {project.status==='Completed'?<li> {`Date Completed: ${fullDate(project.date)} at ${fullTime(project.statusChangeOn)}`}</li> : null}
                    
                </ul>
            </div>
                    
            <div className="project-card-buttons">
            {currentUser.name === project.author || currentUser.name === 'admin'? buttons : <button onClick={handleSteal}>Steal this Job</button> }

                
        </div>
    </div>

    )
}