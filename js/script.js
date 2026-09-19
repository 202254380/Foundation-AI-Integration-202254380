const button = document.querySelector("#theme-toggle");
<<<<<<< HEAD
=======
<<<<<<< HEAD

const page = document.documentElement;

const savedTheme = localStorage.getItem("theme");

if (savedTheme) page.dataset.theme = savedTheme;

button.setAttribute("aria-label", `Switch to ${page.dataset.theme === "dark" ? "light" : "dark"} mode`);

button.addEventListener("click", () => {

  const nextTheme = page.dataset.theme === "dark" ? "light" : "dark";
  page.dataset.theme = nextTheme;

  localStorage.setItem("theme", nextTheme);

=======
>>>>>>> 82543bf11abac31a189fe7293062303ce8a0126e
const page = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) page.dataset.theme = savedTheme;
<<<<<<< HEAD

=======
>>>>>>> 82543bf11abac31a189fe7293062303ce8a0126e
button.setAttribute("aria-label", `Switch to ${page.dataset.theme === "dark" ? "light" : "dark"} mode`);

button.addEventListener("click", () => {
  const nextTheme = page.dataset.theme === "dark" ? "light" : "dark";
  page.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
<<<<<<< HEAD
=======
>>>>>>> 285d9e3064ef41f110b830bd89e53fc39f01a3ca
>>>>>>> 82543bf11abac31a189fe7293062303ce8a0126e
  button.setAttribute("aria-label", `Switch to ${nextTheme === "dark" ? "light" : "dark"} mode`);
});
