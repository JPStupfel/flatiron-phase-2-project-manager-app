import React, {useState} from "react";
import DisplayProjectCard from "./DisplayProjectCard";

export default function ProjectCard({project, onClickDeleteButton}){

    const [edit, setEdit] = useState(false)


    function handleDelete(id){
    console.log('I want to delete', id);
    fetch(`http://localhost:4000/Projects/${id}`, {method: "DELETE"});
    onClickDeleteButton(id)
    }

    function handleClickEdit(){
        setEdit(prev=>!prev)
    }

    

    return(
        <div>

            {!edit ? <DisplayProjectCard 
            onClickDeleteButton={onClickDeleteButton} 
            project={project} 
            handleClickEdit={handleClickEdit}
            /> : <>Let's edit!</>}
            
           

         </div>

    )
}