const inputField = document.getElementById("inputfield");
const todoBtn = document.getElementById("todoBtn");
const todoContainer = document.getElementById("todoContainer");
let list;
let removeBtn;
let inputFieldVal;

addTodo = () => {
    list = document.createElement("li");
    removeBtn = document.createElement("button");
    inputFieldVal = inputField.value;
    list.innerText = inputFieldVal;
    todoContainer.appendChild(list);
    todoContainer.appendChild(removeBtn)
    removeBtn.setAttribute("onclick", "removeTodo()")
    removeBtn.innerHTML = "remove";
    list.classList.add("list");
    todoContainer.classList.add("todoContainer");
    inputField.value = "";
    
  
}

removeTodo = () => {
    removeBtn.addEventListener("click", (e) => {
        list.style.textDecoration = "line-through";
    })

    removeBtn.addEventListener("dblclick", (e) => {
        todoContainer.removeChild(list);
        todoContainer.removeChild(removeBtn)
    })

   

}
//how to create button attribute using js?
// how to use if else statement for button?
