todoInput = document.getElementById("TODO")
addTodo = document.getElementById("addTODO")
list = document.getElementById("list")
const savebtn = document.querySelector(".save")
let saveArray = []

// const save = localStorage.getItem(save)
// const todoArray = save.toArray()
// todoArray.forEach(todo => {
// createTodo()
// });

// Event Listeners
addTodo.addEventListener("click", createTodo)


// Functions
function createTodo() {
const div = document.createElement("div")
div.className = "todo-div"
const btnDiv = document.createElement("div")
btnDiv.className ="btn-div"
const todo = document.createElement("li")
const save = document.createElement("button")
save.textContent = "Save"
save.className = "save"
const deleteBtn = document.createElement("button")
deleteBtn.textContent = "Delete"
deleteBtn.className = "delete"
todo.textContent = todoInput.value
list.appendChild(div)
div.appendChild(todo)
div.appendChild(btnDiv)
btnDiv.appendChild(save)
btnDiv.appendChild(deleteBtn)

deleteBtn.addEventListener("click", deleteTodo)
save.addEventListener("click", saved)
}
function deleteTodo(e) {
const del = e.target
del.parentNode.parentNode.remove()
}
function saved(e){
const target = e.target
const li =  target.parentNode.parentNode.childNodes[0].innerText.toString()
console.log(li)
saveArray.push(li)
localStorage.setItem("save", saveArray.toString())
}