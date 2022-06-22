// Create a new list item when clicking on the "Add" button
function newTask() {
  let li = document.createElement("li");
  let newTask = document.getElementById("newTask").value;
  var task = document.createTextNode(newTask);
  li.appendChild(task);
  if (newTask === "") {
    alert("Insert task!");
  } else {
    document.getElementById("to_do_items").appendChild(li);
  }
  document.getElementById("newTask").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
