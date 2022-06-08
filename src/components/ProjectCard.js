import React, {useState} from "react";
import DisplayProjectCard from "./DisplayProjectCard";

export default function ProjectCard({project, onClickDeleteButton}){


    function handleDelete(id){
    console.log('I want to delete', id);
    fetch(`http://localhost:4000/Projects/${id}`, {method: "DELETE"});
    onClickDeleteButton(id)

    }

    return(
        <div>

            <DisplayProjectCard project={project} />
            
            <button>Edit This Project^</button>
            <button onClick={()=>handleDelete(project.id)} >Delete This Project^</button>

         </div>

    )
}