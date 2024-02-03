const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');


const todos = JSON.parse(localStorage.getItem('todos'));


if(todos){
    todos.forEach(todo=> addTodo(todo))
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})



function addTodo(todo) {
    let todoText = input.value;
    if (todo) {
        todoText = todo.text
    };
    if (todoText) {
        const todoEl = document.createElement('li');
        if (todo && todo.completed) {
            todoEl.classList.add('task-complete');
        }

        todoEl.innerHTML = `<span>${todoText}</span> <div class="btn-group"><button id="complete-task-btn"><i class="fa-solid fa-check"></i></button> <button id="delete-task-btn"><i class="fa-solid fa-trash"></i></button></div>`;



        todosUL.appendChild(todoEl);
        input.value = '';

        todoEl.addEventListener( 'click' , () =>{
            console.log("clicked");
        todoEl.classList.toggle('task-complete');
        updateLS()
    });

        const completeBtn = document.querySelectorAll('#complete-task-btn');
        const deleteBtn = document.querySelectorAll('#delete-task-btn');

        // completeBtn.forEach(eveb => {
        //     eveb.addEventListener( 'click' , () =>{
        //         console.log("clicked");
        //     eveb.parentElement.parentElement.classList.toggle('task-complete');
        //     updateLS()
        // });
        // });

        deleteBtn.forEach(e => {
            e.addEventListener('click', (ev) =>{
                ev.preventDefault()
            e.parentElement.parentElement.remove();
            updateLS()
        });
        });


 updateLS()
      
    }
}

function updateLS() {
     todoEl= document.querySelectorAll('li');
     const todos = [];
     todoEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('task-complete')
        });
     });

     localStorage.setItem('todos', JSON.stringify(todos));
    }