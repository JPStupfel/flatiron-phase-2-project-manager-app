import React from "react";

export default function DisplayProjectCard({project, handleDelete, handleClickEdit}){


    return(
    <div>
 
            <h3>{project.name}</h3>
            <ul>
                <li>
                    Created by: {project.author}
                </li>
                <li>
                    Project Status: {project.status}
                </li>
            </ul>
                   

            <button onClick={handleClickEdit} >{`Edit This Project`} ^</button>

            <button onClick={()=>handleDelete(project.id)} >Delete This Project^</button>
    </div>
    )
}