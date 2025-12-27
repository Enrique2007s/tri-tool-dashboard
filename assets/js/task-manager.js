//Get elements
const taskInput = document.getElementById('task-input');
const addbtn = document.getElementById('addbtn');
const tasklist = document.getElementById('tasklist');

//load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//display tasks placed in localStorage
function showTasks() {
    tasklist.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className =`task ${task.completed ? 'completed' : ''}`;

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

    tasklist.appendChild(li);
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

addbtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
showTasks();