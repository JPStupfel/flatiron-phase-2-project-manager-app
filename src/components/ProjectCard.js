import React, {useState} from "react";
import DisplayProjectCard from "./DisplayProjectCard";
import EditProjectCard from "./EditProjectCard";

export default function ProjectCard({
    project, 
    onClickDeleteButton, 
    onEditProject, 
    userList,
    handleVerifyProjectCount}){

    const [edit, setEdit] = useState(false)


    function handleDelete(id){
    fetch(`http://localhost:4000/Projects/${id}`, {method: "DELETE"});
    onClickDeleteButton(id)
    }

    function handlePatch(obj){
        const objForPatch = {"name": obj.name, "author": obj.author, "status": obj.status, 'statusChangeOn':obj.statusChangeOn}


        fetch(`http://localhost:4000/Projects/${obj.id}`, {
            method: "PATCH",
            headers: { 'Content-type': 'application/json; charset=UTF-8',},
            body: JSON.stringify(objForPatch)
        }).then(r=>r.json()).then(d=>{onEditProject(d);console.log('patch',d)}).catch((error)=>alert(error))
        
        }
  

    function handleClickEdit(){
        setEdit(prev=>!prev)
    }



    

    return(
        <div>

            {!edit ? 
            <DisplayProjectCard 
            handleDelete={handleDelete} 
            project={project} 
            handleClickEdit={handleClickEdit}
            /> 
            : 
            <EditProjectCard 
            handleClickEdit={handleClickEdit} 
            project={project} 
            handlePatch={handlePatch}
            userList={userList}
            
            />}
            
           

         </div>

    )
}