let submitButton= document.getElementById("formInput");
submitButton.addEventListener("submit", addTask);
let plans= document.getElementById("plans");


function addTask (e){
    e.preventDefault();
    let taskContent= document.getElementById("taskInput").value;
    taskContent= taskContent.toString();
    taskContent=taskContent.trim();
    
    console.log(taskContent);
    if(taskContent==""){
        document.getElementById("wrongInput").innerHTML= 
        "You have entered invalid plan!";
        
    }
    else{
        document.getElementById("wrongInput").innerHTML= "";

        let content= document.createElement("input");
        let task= document.createElement("div");
        let action= document.createElement("div");
        let editButton= document.createElement("button");
        let deleteButton= document.createElement("button");

        task.classList.add("plan");
        action.classList.add("action");
        deleteButton.classList.add("delete");
        deleteButton.innerHTML="DELETE";
        editButton.classList.add("edit");
        editButton.innerHTML="EDIT";
        content.classList.add("taskInput");
        content.value=taskContent;
        content.readOnly=true;

        task.appendChild(content);
        action.appendChild(editButton);
        action.appendChild(deleteButton);
        task.appendChild(action);
        plans.appendChild(task);

        editButton.addEventListener("click", ()=>{
            if (content.readOnly){
                content.readOnly=false;
                editButton.innerHTML="Save";
            }
            else{
                content.readOnly=true;
                editButton.innerHTML="EDIT";
            };
        });
        deleteButton.addEventListener("click", ()=>{
            plans.removeChild(task);
        })

    }
}


