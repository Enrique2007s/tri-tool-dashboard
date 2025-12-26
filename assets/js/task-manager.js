//Get elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

//load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//display tasks placed in localStorage
function showTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classname =`task ${task.completed ? 'completed' : ''}`;

        li.innerHTML = `
            <span class="text">${task.text}</span>
            <button class="delete" data-index="${index}">Delete</button>`;
    
        li.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            showTasks();
    });

    li.querySelector('.delete').addEventListener('click', (e) => {
        e.stopPropagation();
        tasks.splice(index, 1);
        saveTasks();
        showTasks();
    });

    taskList.appendChild(li);
    });

}

function addTask() {
    const text = taskInput.value.trim();
    if (text !== '') {
        tasks.push({ text: text, completed: false });

        taskInput.value = '';
        saveTasks();
        showTasks();
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
showTasks();