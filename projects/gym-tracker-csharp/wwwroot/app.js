const storageKey = "ironlog-workouts";
const form = document.querySelector("#workout-form");
const exerciseInput = document.querySelector("#exercise");
const list = document.querySelector("#workout-list");
const emptyState = document.querySelector("#empty-state");
let workouts = JSON.parse(localStorage.getItem(storageKey) || "[]");

function saveWorkouts() {
  localStorage.setItem(storageKey, JSON.stringify(workouts));
}

function renderWorkouts() {
  list.replaceChildren();
  emptyState.hidden = workouts.length > 0;

  workouts.forEach((workout) => {
    const item = document.createElement("article");
    item.className = "workout-item";

    const details = document.createElement("div");
    const title = document.createElement("h3");
    const numbers = document.createElement("p");
    title.textContent = workout.exercise;
    numbers.textContent = `${workout.sets} sets × ${workout.reps} reps at ${workout.weight} kg`;
    details.append(title, numbers);

    const volume = document.createElement("span");
    volume.className = "workout-volume";
    volume.textContent = `${workout.sets * workout.reps * workout.weight} kg`;

    const remove = document.createElement("button");
    remove.className = "delete-button";
    remove.type = "button";
    remove.setAttribute("aria-label", `Delete ${workout.exercise}`);
    remove.textContent = "×";
    remove.addEventListener("click", () => {
      workouts = workouts.filter((entry) => entry.id !== workout.id);
      saveWorkouts();
      renderWorkouts();
    });

    item.append(details, volume, remove);
    list.append(item);
  });

  const totalSets = workouts.reduce((total, workout) => total + workout.sets, 0);
  const totalVolume = workouts.reduce(
    (total, workout) => total + workout.sets * workout.reps * workout.weight,
    0
  );
  document.querySelector("#workout-count").textContent = workouts.length;
  document.querySelector("#set-count").textContent = totalSets;
  document.querySelector("#volume-count").textContent = totalVolume.toLocaleString();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  workouts.unshift({
    id: Date.now(),
    exercise: data.get("exercise").trim(),
    sets: Number(data.get("sets")),
    reps: Number(data.get("reps")),
    weight: Number(data.get("weight"))
  });
  saveWorkouts();
  renderWorkouts();
  form.reset();
  exerciseInput.focus();
});

document.querySelectorAll("[data-exercise]").forEach((button) => {
  button.addEventListener("click", () => {
    exerciseInput.value = button.dataset.exercise;
    exerciseInput.focus();
  });
});

document.querySelector("#clear-workouts").addEventListener("click", () => {
  workouts = [];
  saveWorkouts();
  renderWorkouts();
});

const fallbackTips = [
  "Control every repetition and prioritize good form.",
  "Record each workout and improve one small detail next time.",
  "Recovery, hydration, and sleep support your training."
];

document.querySelector("#new-tip").addEventListener("click", async () => {
  const tip = document.querySelector("#coach-tip");
  try {
    const response = await fetch("/api/tip");
    if (!response.ok) throw new Error("Server tip unavailable");
    tip.textContent = (await response.json()).tip;
  } catch {
    tip.textContent = fallbackTips[Math.floor(Math.random() * fallbackTips.length)];
  }
});

renderWorkouts();
