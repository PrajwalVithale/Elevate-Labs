document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const clearBtn = document.getElementById("clearBtn");
    const themeToggle = document.getElementById("themeToggle");
  
    addBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        taskInput.classList.add('empty'); // show red border
        return; // prevent adding empty task
      } else {
        taskInput.classList.remove('empty');
      }
  
      const li = document.createElement("li");
      li.textContent = taskText;
  
      // Toggle complete
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });
  
      // Remove button
      const removeBtn = document.createElement("button");
      removeBtn.innerHTML = "&times;";
      removeBtn.classList.add("remove-btn");
      removeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
      });
  
      li.appendChild(removeBtn);
      taskList.appendChild(li);
  
      taskInput.value = "";
    });
  
    // Clear All Tasks
    clearBtn.addEventListener("click", () => {
      taskList.innerHTML = "";
    });
  
    // Theme Toggle
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      themeToggle.textContent = document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
    });
  });
  