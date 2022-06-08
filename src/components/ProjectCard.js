import React from "react";

export default function ProjectCard({project}){


    function handleDelete(id){
    console.log('I want to delete', id)
    fetch(`http://localhost:4000/Projects/${id}`, {method: "DELETE"})
    }

    return(
        <div>
            <h3>{project.name}</h3>
            <button>Edit This Project^</button>
            <button onClick={()=>handleDelete(project.id)} >Delete This Project^</button>
            <ul>
                <li>
                    Created by: {project.author}
                </li>
                <li>
                    Project Status: {project.status}
                </li>
            </ul>
            
         </div>

    )
}