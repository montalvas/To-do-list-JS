let lista = document.querySelector("ul.lista");
let add = document.querySelector("button#add");

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function showTodos() {
    lista.innerHTML = '';

    for(todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);
        let linkElement = document.createElement('a');
        linkElement.innerHTML = '&#10006;';
        linkElement.setAttribute('href', '#');

        let pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        lista.appendChild(todoElement);
    }
}

showTodos();

add.onclick = function addTodo() {
    let inputElement = document.querySelector("#tdelement");
    let todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    showTodos();
    saveToStorage();
}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    showTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
