//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//event listeners  buttons
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//functions
function addTodo(event){
    //prevent form form submitting
   event.preventDefault();
   //CREATE todo div
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
   //CREATE LI
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
   //CREATE check complete buttton
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add("complete-btn");
   todoDiv.appendChild(completedButton);
    //CREATE check trash buttton
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add("trash-btn");
   todoDiv.appendChild(trashButton);
   //APPEND TO LIST
   todoList.appendChild(todoDiv);
   //clear todo input value
   todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //DELETE TODO
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;

        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();

        });
        
    }


    //CHECK MARK
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
                break;
            case "incompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
                break;
        }
    });
}
/*function saveLocalsTodos(todo){
    //Check--Yah! do I already have things in there?

}   

*/    

