//Get elements
const taskInput = document.getElementById("task-input");
const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("tasklist");

//load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//show all tasks on page
function showTasks() {
    tasklist.innerHTML = ""; //clears current list

    tasks.forEach((task, index) => {
        const li = document.createElement("li"); //creates new element(list items)
        li.className =`task ${task.completed ? "completed" : ""}`;

        //add task text and delete button as well as add a class for styling
        //This part is credited to DeepSeek(AI)
        li.innerHTML = `
            <span class="text">${task.text}</span>
            <button class="delete" data-index="${index}">Delete</button>`;
        li.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            showTasks();
    });

    li.querySelector(".delete").addEventListener("click", (e) => {
        e.stopPropagation();
        tasks.splice(index, 1);
        saveTasks();
        showTasks();
    });

    tasklist.appendChild(li);
    });

}//end of DeepSeek(AI) help on this part

//add new task
function addTask() {
    const text = taskInput.value.trim();
    if (text !== '') {
        tasks.push({ text: text, completed: false });

        taskInput.value = "";
        saveTasks();
        showTasks();
    }
}
//saves tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

addbtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
//function to show tasks on page load
showTasks();