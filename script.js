window.addEventListener('load',()=>{
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector("#new-task-input");
    const list_ele = document.querySelector('#tasks');
    const getStatus = document.querySelector("#status");
    getStatus.innerText = "Your Pending Tasks : 0";

    let count = 0; // Initialization for pending task status

    // Writing Function for Submit Button
    form.addEventListener('submit',(e)=>{
        e.preventDefault(); // To avoid page refresing

        const task = input.value; // Storing Input Task
        // Warn if there is no task entered
        if(!task){
            alert("Please Enter the task");
            //Do nothing on count if submition has no input
            count = count;
            return;
        } 

        // Pending Tasks - Addition
        count = count + 1;
        getStatus.innerText = `Your Pending Tasks : ${count}`;

        // Creating Div with className:Task 
        const task_ele = document.createElement('div');
        task_ele.classList.add('task');

        list_ele.appendChild(task_ele);

        // Creating "span" Element
        const unCheck = document.createElement('span');
        unCheck.classList.add('checked');

        task_ele.appendChild(unCheck);

        // Creating Div with className:Content
        const task_content_ele = document.createElement('div');
        task_content_ele.classList.add('content');

        task_ele.appendChild(task_content_ele);

        // Creating Input Tag with className:text
        const task_input_ele = document.createElement('input');
        task_input_ele.classList.add("text");
        task_input_ele.type = 'text';
        task_input_ele.value = task;
        task_input_ele.setAttribute("readonly","readonly");

        task_content_ele.appendChild(task_input_ele);
        
        // Creating Div with className:Actions
        const task_actions_ele = document.createElement('div');
        task_actions_ele.classList.add('actions');
        
        task_ele.appendChild(task_actions_ele);

        // Creating Button with className:edit
        const task_edit_ele = document.createElement('button');
        task_edit_ele.classList.add("edit");
        task_edit_ele.innerHTML= "Edit";

        // Creating Button with className:delete
        const task_delete_ele = document.createElement('button');
        task_delete_ele.classList.add('delete');
        task_delete_ele.innerHTML = "Delete";

        task_actions_ele.appendChild(task_edit_ele);
        task_actions_ele.appendChild(task_delete_ele);

    
        // Making Input field empty and submiting
        input.value = "";
       
        // Writing Functions for Edit & Save Buttons
        task_edit_ele.addEventListener('click',()=>{
            if(task_edit_ele.innerText.toLowerCase()== "edit"){
                task_input_ele.removeAttribute("readonly");
                task_input_ele.focus();
                task_edit_ele.innerText = "Save";
                
            }else{
                task_input_ele.setAttribute("readonly","readonly");
                task_edit_ele.innerText = "Edit";  
            }
        });

   

        // Writing Function for Delete Button
        task_delete_ele.addEventListener('click',()=>{
            list_ele.removeChild(task_ele);

            // Pending Tasks - Removal
            count = count - 1;
            getStatus.innerText = `Your Pending Tasks : ${count}`;
        })

        // Writing Functions for Strike-out & Checked 
        task_content_ele.addEventListener("click",()=>{
            if(task_edit_ele.innerText.toLowerCase()== "edit"){
                task_input_ele.classList.toggle("checked");
                task_edit_ele.classList.toggle("disable");
                unCheck.classList.toggle('checked');
            }else{
                task_input_ele.classList.remove("checked");
            }
        });
     
    });
    
});

