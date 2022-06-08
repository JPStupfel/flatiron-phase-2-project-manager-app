import React, {useState} from "react";
import DisplayProjectCard from "./DisplayProjectCard";
import EditProjectCard from "./EditProjectCard";

export default function ProjectCard({project, onClickDeleteButton}){

    const [edit, setEdit] = useState(false)


    function handleDelete(id){
    console.log('I want to delete', id);
    fetch(`http://localhost:4000/Projects/${id}`, {method: "DELETE"});
    onClickDeleteButton(id)
    }

    function handlePatch(obj){
        console.log('I want to patch', obj.id);
        const objForPatch = {"name": obj.name, "author": obj.author, "status": obj.status}


        fetch(`http://localhost:4000/Projects/${obj.id}`, {
            method: "PATCH",
            headers: { 'Content-type': 'application/json; charset=UTF-8',},
            body: JSON.stringify(objForPatch)
        }).then(r=>r.json()).then(d=>console.log('patched', d))
        
        //onClickDeleteButton(id)
        }



    

    function handleClickEdit(){
        setEdit(prev=>!prev)
    }



    

    return(
        <div>

            {!edit ? <DisplayProjectCard 
            handleDelete={handleDelete} 
            project={project} 
            handleClickEdit={handleClickEdit}
            /> : <EditProjectCard handleClickEdit={handleClickEdit} project={project} handlePatch={handlePatch}/>}
            
           

         </div>

    )
}