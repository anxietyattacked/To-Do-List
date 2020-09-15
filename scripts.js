todoInput = document.getElementById("TODO")
addTodo = document.getElementById("addTODO")
list = document.getElementById("list")
const savebtn = document.querySelector(".save")
let saveArray = []

const save = localStorage.getItem("save")
if(save != undefined) {
    let todoArray = save.split(",")
    console.log(todoArray)
    if (todoArray === [[""]]) {
       console.log(todoArray)
} else {
    todoArray.forEach(todo => {
        createTodo(todo)
        console.log(todoArray)
        });
}
}

   

// Event Listeners
addTodo.addEventListener("click", () => {
    createTodo(todoInput.value)
})


// Functions
function createTodo(elm) {
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
todo.textContent = elm
list.appendChild(div)
div.appendChild(todo)
div.appendChild(btnDiv)
btnDiv.appendChild(save)
btnDiv.appendChild(deleteBtn)
console.log("clicked")
deleteBtn.addEventListener("click", deleteTodo)
save.addEventListener("click", saved)
}
function deleteTodo(e) {
let todoArray = save.split(",")
const del = e.target
const li = del.parentNode.parentNode.childNodes[0].innerText.toString()
const filtered = todoArray.filter(item => {
    return item !== li
})
saveArray.filter(item => {
    return item !== li
})
localStorage.removeItem("save")
localStorage.setItem("save", filtered.toString())
console.log(localStorage.getItem("save"))
del.parentNode.parentNode.remove()
}
function saved(e){
const target = e.target
const li =  target.parentNode.parentNode.childNodes[0].innerText.toString()
console.log(li)
saveArray.push(li)
localStorage.setItem("save", saveArray.toString())
}