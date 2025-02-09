var btn = document.querySelector("#add_task"); 
var list = document.querySelector("#lists");   
var taskInput = document.querySelector("#task"); 
var currentEdit = null; 


function createTask(taskText) {
    var li = document.createElement("li");  
    li.textContent = taskText;  

    
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit"; 
    editBtn.classList.add("edit");  

    
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";  
    deleteBtn.classList.add("delete");  

    
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    
    list.appendChild(li);

  
    editBtn.addEventListener("click", function() {
 
        taskInput.value = taskText;
        currentEdit = li;  
    });


    deleteBtn.addEventListener("click", function() {
        list.removeChild(li);  
    });
}

btn.addEventListener("click", function() {
    var taskText = taskInput.value.trim();
    if (taskText) {
        if (currentEdit) {
            currentEdit.firstChild.textContent = taskText;
            currentEdit = null;  
        } else {
            createTask(taskText);
        }
        taskInput.value = "";
    }
});
