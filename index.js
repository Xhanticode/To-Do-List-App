// Create a new list item when clicking on the "Add" button
function newTask() {
  let li = document.createElement("li");
  let newTask = document.getElementById("newTask").value;
  let task = document.createTextNode(newTask);
  li.appendChild(task);
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

  li.appendChild(taskActions);
  document.getElementById("to_do_items").appendChild(li);
}
