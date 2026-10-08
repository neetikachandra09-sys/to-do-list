function addTask() {

    const input = document.getElementById("taskInput");

    const taskText = input.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }

    const taskList = document.getElementById("taskList");

    // Create list item
    const li = document.createElement("li");

    li.className = "task";

    // Create task text
    const span = document.createElement("span");

    span.className = "task-text";

    span.textContent = taskText;

    // Mark task as completed
    span.onclick = function () {

        span.classList.toggle("completed");

    };

    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-btn";

    // Delete task
    deleteButton.onclick = function () {

        li.remove();

    };

    // Add elements to list item
    li.appendChild(span);

    li.appendChild(deleteButton);

    // Add list item to task list
    taskList.appendChild(li);

    // Clear input
    input.value = "";

    input.focus();
}
