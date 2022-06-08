import React from "react";

export default function ProjectCard({project}){

    return(
        <div>
            <h3>{project.name}</h3>
            <button>Edit This Project^</button>
            <button>Delete This Project^</button>
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