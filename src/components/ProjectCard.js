import React, {useState} from "react";
import DisplayProjectCard from "./DisplayProjectCard";

export default function ProjectCard({project, onClickDeleteButton}){

    const [edit, setEdit] = useState(false)


    function handleDelete(id){
    console.log('I want to delete', id);
    fetch(`http://localhost:4000/Projects/${id}`, {method: "DELETE"});
    onClickDeleteButton(id)

    }

    return(
        <div>

            {!edit ? <DisplayProjectCard project={project} /> : <>Let's edit!</>}
            
            <button onClick={()=>setEdit(prev=>!prev)} >Edit This Project^</button>
            <button onClick={()=>handleDelete(project.id)} >Delete This Project^</button>

         </div>

    )
}