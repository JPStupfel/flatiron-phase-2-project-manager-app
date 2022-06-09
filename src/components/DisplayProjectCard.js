import React from "react";
import  '../App.css';


export default function DisplayProjectCard({project, handleDelete, handleClickEdit}){


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
                </ul>
            </div>
                    
            <div className="project-card-buttons">

                <button onClick={handleClickEdit} >Edit This Project</button>

                <button onClick={()=>handleDelete(project.id)} >Delete This Project</button>
        </div>
    </div>
    )
}