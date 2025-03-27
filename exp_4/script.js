document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const searchInput = document.getElementById("searchInput");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return alert("Task cannot be empty!");
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete-btn">X</button>`;
        li.querySelector(".delete-btn").addEventListener("click", () => li.remove());
        li.addEventListener("click", () => li.classList.toggle("completed"));
        taskList.appendChild(li);
        taskInput.value = "";
    }

    addTaskBtn.addEventListener("click", addTask);
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        document.querySelectorAll("#taskList li").forEach(task =>
            task.style.display = task.textContent.toLowerCase().includes(searchTerm) ? "flex" : "none"
        );
    });

    if (localStorage.getItem("dark-mode") === "enabled") body.classList.add("dark-mode");
});
