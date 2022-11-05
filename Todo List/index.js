// for every time when the page reloads
window.addEventListener("load", () => {
  // getting todos from local storage when the page loads
  // todos is not declared with any variable so its scope is global and can be used in any
  todos = JSON.parse(localStorage.getItem("todos")) || [];

  // giving variables to html elements
  const nameInput = document.querySelector("#name");
  const newTodoForm = document.querySelector("#new-todo-form");
  const userName = localStorage.getItem("username") || "";

  // nameInput wale input ki value userName parstore hogi
  nameInput.value = userName;

  // nameInput par addEventListener lga kar uski key change kardi taki jb bhi nameInput change ho localStorage par username ki key par store hojaye
  nameInput.addEventListener("change", (e) => {
    // passing event to get the value of nameInput (targeting nameInput not userName)
    localStorage.setItem("username", e.target.value);
  });

  // addEventListener on the form (newTodoForm)

  newTodoForm.addEventListener("submit", (e) => {
    //  e.preventDefault() will prevent page to reload when submit is clicked
    e.preventDefault();
    const inputForm = document.querySelector("#content");
    if (inputForm.value === "") {
      return;
    }
    // declaring a new object name todo which have 3 key value pairs
    // the keys will take its value from html
    const todo = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
    };

    // to push the todo variable in todos
    todos.push(todo);
    // adding todos in local storage
    localStorage.setItem("todos", JSON.stringify(todos));
    // to reset the form after the submit button is clicked
    e.target.reset();
    // calling DisplayTodos() to display todos after submit button is clicked
    DisplayTodos();
  });
  // calling DisplayTodos() to display todos after page is loaded
  DisplayTodos();
});

function DisplayTodos() {
  // this todoList variable will containe all the lists
  const todoList = document.querySelector("#todo-list");
  todoList.innerHTML = " ";

  // this foreach will target every todo
  todos.forEach((todo) => {
    // declaring a variable named todoItem which will create a element div
    const todoItem = document.createElement("div");
    // adding class to todoItem
    todoItem.classList.add("todo-item");
    //creating label, input, span, two more divs and two buttons
    // the content div will contain the text
    // action div will contain the two buttons (i.e : edit and deleteButton)
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const edit = document.createElement("button");
    const deleteButton = document.createElement("button");

    // the input type for the inputs will be checkbox
    input.type = "checkbox";
    // if input is checked done key from todo object will turn true before checked its false
    input.checked = todo.done;
    // adding class to span
    span.classList.add("bubble");

    // using if else statement that if the category of the todo object is personal
    // add class personal else add class business
    if (todo.category == "personal") {
      span.classList.add("personal");
    } else {
      span.classList.add("business");
    }

    // adding class to content actions edit adn deleteButton
    content.classList.add("todo-content");
    actions.classList.add("actions");
    edit.classList.add("edit");
    deleteButton.classList.add("delete");

    // the innerText of the content will a input and its value will be content from todo object
    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    edit.innerHTML = "Edit";
    deleteButton.innerHTML = "X";

    // label will append child and input
    //action will appendchild both edit and delete buttons
    // todoItem will appendchild label, actions adn content
    // todoList will append child todoItem
    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);
    todoList.appendChild(todoItem);

    if (todo.done) {
      todoItem.classList.add("done");
    }

    // if input (type = checkbox) is clicked todo.done which is false currently will turn true
    input.addEventListener("click", (e) => {
      todo.done = e.target.checked;
      // to change in local storage
      localStorage.setItem("todos", JSON.stringify(todos));

      // to change class if todo.done is trueor false and then displayTodo
      if (todo.done) {
        todoItem.classList.add("done");
      } else {
        todoItem.classList.remove("done");
      }

      DisplayTodos();
    });

    edit.addEventListener("click", (e) => {
      // declaring input with this value to select input from content
      const input = content.querySelector("input");
      // to remove attribute of readonly
      input.removeAttribute("readonly");
      // to let the user Type after the edit button is clicked
      input.focus();

      input.addEventListener("blur", (e) => {
        // when user leaves the input, the readonly attribute is et again
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        // to update the localStorage
        localStorage.setItem("todos", JSON.stringify(todos));
        // re display the todos after the update
        DisplayTodos();
      });
    });
    // applying foreach method the todos when the deleteButton is clicked
    // t is a abbreviation of todo just to clear any confusion
    deleteButton.addEventListener("click", (e) => {
      (todos = todos.filter((t) => t != todo)),
        // to update LS
        localStorage.setItem("todos", JSON.stringify(todos));
      DisplayTodos();
    });
  });
}
