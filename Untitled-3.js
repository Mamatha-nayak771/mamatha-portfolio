// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;


// Load saved theme
if (localStorage.getItem("theme") === "light") {
body.classList.add("light");
}


themeToggle.addEventListener("click", () => {
body.classList.toggle("light");
localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
});


// Dynamic Projects
const projects = [
{ title: "Project 1", description: "A cool project built using HTML, CSS, JS." },
{ title: "Project 2", description: "Another amazing project with clean UI." },
{ title: "Project 3", description: "Responsive design and animation effects." }
];


const projectContainer = document.getElementById("projectContainer");
projects.forEach(p => {
const card = document.createElement("div");
card.classList.add("project-card");
card.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
projectContainer.appendChild(card);
});


// Contact Form
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
e.preventDefault();
alert("Message sent successfully!");
});