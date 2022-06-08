import React from "react";

export default function DisplayProjectCard({project}){
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
    </div>
    )
}