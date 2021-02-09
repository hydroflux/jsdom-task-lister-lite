// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

const $createTaskForm = document.getElementById("create-task-form")
const $taskList = document.getElementById("tasks")

$createTaskForm.addEventListener( "submit" , addTask )

function addTask(event){
  event.preventDefault()
  const taskDescription = getTaskDescription(event)

  $taskList.appendChild(createTask(taskDescription))
}

function getTaskDescription(event){
  const taskForm = new FormData(event.target)
  return taskForm.get("new-task-description")
}

function createTask(taskDescription){
  $li = document.createElement("li")
  $li.textContent = taskDescription

  const $delete = document.createElement("button")
  $delete.textContent = "x"

  $li.appendChild($delete)
  $delete.addEventListener( "click" , deleteTask )

  return $li
}

function deleteTask(event){
  event.path[1].remove()
}