const inputField = document.getElementById("inputfield");
let todoBtn = document.getElementById("todoBtn");
const todoContainer = document.getElementById("todoContainer");
let list;
let removeBtn;
let inputFieldVal;
let listArr = [];

function onLoad() {
  const todoItems = localStorage.getItem("TodoList");
  console.log(todoItems);

  if (todoItems) {
    listArr = JSON.parse(todoItems);

    if (listArr.length > 0) {
      for (let index = 0; index < listArr.length; index++) {
        let element = listArr[index];

        list = document.createElement("li");
        removeBtn = document.createElement("button");

        list.innerText = element;
        todoContainer.appendChild(list);
        todoContainer.appendChild(removeBtn);
        removeBtn.setAttribute("onclick", "removeTodo()");
        removeBtn.innerHTML = "remove";
        list.classList.add("list");
        todoContainer.classList.add("todoContainer");
      }
    }
  }
}

const addTodo = () => {
  inputFieldVal = inputField.value;
  if (inputFieldVal === "") {
    return;
  }
  list = document.createElement("li");
  removeBtn = document.createElement("button");
  list.innerText = inputFieldVal;
  todoContainer.appendChild(list);

  todoContainer.appendChild(removeBtn);
  removeBtn.setAttribute("onclick", "removeTodo()");
  removeBtn.innerHTML = "remove";
  list.classList.add("list");

  todoContainer.classList.add("todoContainer");
  listArr.push(inputFieldVal);
  localStorage.setItem("TodoList", JSON.stringify(listArr));

  inputField.value = " ";
};

const removeTodo = () => {
  removeBtn.addEventListener("click", () => {
    list.style.textDecoration = "line-through";
  });

  removeBtn.addEventListener("dblclick", () => {
    todoContainer.removeChild(list);
    todoContainer.removeChild(removeBtn);
  });
};

/*
- Which js function called on page load?
- Get items from localStorage but inside this^ function
- Display items from local storage on page load
****
- Delete items from localStorage on button click
*/
