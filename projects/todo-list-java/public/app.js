const storageKey = "focuslist-tasks";
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
let tasks = JSON.parse(localStorage.getItem(storageKey) || "[]");
let activeFilter = "all";

document.querySelector("#today").textContent = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric"
}).format(new Date());

function saveTasks() {
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}

function visibleTasks() {
  if (activeFilter === "open") return tasks.filter((task) => !task.done);
  if (activeFilter === "done") return tasks.filter((task) => task.done);
  return tasks;
}

function renderTasks() {
  taskList.replaceChildren();
  const shownTasks = visibleTasks();
  emptyState.hidden = shownTasks.length > 0;

  shownTasks.forEach((task) => {
    const item = document.createElement("article");
    item.className = `task-item${task.done ? " done" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.setAttribute("aria-label", `Mark ${task.text} complete`);
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    const copy = document.createElement("div");
    copy.className = "task-copy";
    const title = document.createElement("strong");
    const category = document.createElement("span");
    title.textContent = task.text;
    category.textContent = task.category;
    copy.append(title, category);

    const remove = document.createElement("button");
    remove.className = "delete-button";
    remove.type = "button";
    remove.setAttribute("aria-label", `Delete ${task.text}`);
    remove.textContent = "×";
    remove.addEventListener("click", () => {
      tasks = tasks.filter((entry) => entry.id !== task.id);
      saveTasks();
      renderTasks();
    });

    item.append(checkbox, copy, remove);
    taskList.append(item);
  });

  const completed = tasks.filter((task) => task.done).length;
  const percentage = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
  document.querySelector("#progress-label").textContent = `${percentage}% complete`;
  document.querySelector("#progress-bar").style.width = `${percentage}%`;
  document.querySelector("#progress-message").textContent = tasks.length
    ? `${completed} of ${tasks.length} tasks finished.`
    : "Add a task to begin your day.";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  tasks.unshift({
    id: Date.now(),
    text: data.get("task").trim(),
    category: data.get("category"),
    done: false
  });
  saveTasks();
  form.reset();
  activeFilter = "all";
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === "all");
  });
  renderTasks();
  input.focus();
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((filterButton) => {
      filterButton.classList.toggle("active", filterButton === button);
    });
    renderTasks();
  });
});

document.querySelector("#clear-completed").addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.done);
  saveTasks();
  renderTasks();
});

fetch("/api/status")
  .then((response) => {
    if (!response.ok) throw new Error("Java server unavailable");
    return response.json();
  })
  .then(() => {
    document.querySelector("#server-status").textContent = "Java online";
  })
  .catch(() => {
    document.querySelector("#server-status").textContent = "Static demo";
  });

renderTasks();
