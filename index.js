// Create a new list item when clicking on the "Add" button
const todos = []
// const toDo = [
//     {name: ${li}}
// ]

// let items = JSON.parse(localStorage.getItem("items")) || [];
function newTask() {
  let eachTask = document.createElement("div");
  eachTask.classList.add("each_task")
  let li = document.createElement("input");
  li.classList.add("taskList");
  li.type = "text";
  let newTask = document.getElementById("newTask").value;
  li.value = newTask;
  li.setAttribute('readonly', 'readonly');
  let taskObject = {
    title: newTask,
    createdDate: new Date(),
    id: todos.length +1,
    completed: false
  }
  todos.push(taskObject)
  console.log(todos);
  // let task = document.createTextNode(newTask);
  // li.appendChild(task);
  if (newTask === "") {
    alert("Insert task!");
  } else {
    document.getElementById("to_do_items").appendChild(li);
  }
  document.getElementById("newTask").value = "";
  
  const taskActions = document.createElement("div");
  taskActions.classList.add("actions");
  
  const taskEdit = document.createElement("button");
  taskEdit.classList.add("edit");
  taskEdit.innerText = "Edit";
  
  const taskDelete = document.createElement("button");
  taskDelete.classList.add("delete");
  taskDelete.innerText = "Delete";
  
  taskActions.appendChild(taskEdit);
  taskActions.appendChild(taskDelete);
  
  eachTask.appendChild(li);
  eachTask.appendChild(taskActions);
  document.getElementById("to_do_items").appendChild(eachTask);

  taskEdit.addEventListener("click", (e) => {
    if (taskEdit.innerText.toLowerCase() == "edit") {
      taskEdit.innerText = "Save";
      li.removeAttribute("readonly");
      li.focus();
    } else {
      taskEdit.innerText = "Edit";
      taskEdit.setAttribute("readonly", "readonly");
    }
  });

  taskDelete.addEventListener("click", (e) => {
    document.getElementById("to_do_items").removeChild(li);
  });
}
