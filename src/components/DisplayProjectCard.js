import React from "react";
import  '../App.css';


export default function DisplayProjectCard({project, handleDelete, handleClickEdit}){

    const fullDate = new Date(project.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 

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
                        Date Created: {fullDate}
                    </li>
                    
                        {project.status==='Completed'?<li> {`Date Completed: ${fullDate}`}</li> : null}
                    
                </ul>
            </div>
                    
            <div className="project-card-buttons">

                <button onClick={handleClickEdit} >Edit This Project</button>

                <button onClick={()=>handleDelete(project.id)} >Delete This Project</button>
        </div>
    </div>
    )
}