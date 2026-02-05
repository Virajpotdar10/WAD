function checkcat() {
  let name = prompt("Enter your name:");
  let age = Number(prompt("Enter your age:"));
  
  const message = document.getElementById("message");

  if (age >= 18) {
    message.innerText = `Hey ${name},you can vote`;
    message.style.color="green";
  } else if (age > 0) {
    message.innerText = "You are too young to vote ❌";
  } else {
    message.innerText = "Please enter a valid age.";
  }
};

const reset = document.getElementById("reset")
const changeBtn= document.getElementById("changeBtn")
reset.addEventListener("click",function()
{
  const message = document.getElementById("message");
  message.innerText = "Click to check your voting eligibility!";
})


function agecheck(Birth)
{
  const currentYear = new Date().getFullYear();
  return currentYear - Birth;
}

const person = [
  {name: "Viraj",age:21},
  {name:"Vishu",age: 20,},
  {name:"Vishal",age: 19,},
];

console.log(person[0].name);

for (const user of person)
{
  console.log([ user.name + " is " + user.age, "years old" ].join(" "));

}
const books = [
  { title: "HTML Basics", pages: 100 },
  { title: "CSS Design", pages: 150 },
  { title: "JavaScript Guide", pages: 200 }
];

for (let book of books) {
  console.log([ book.title + " has " + book.pages, "pages" ].join(" "));
}
function savename()
{
  let name = document.getElementById("nameInput").value;
  localStorage.setItem("myname", name);
}
function loadName() {
  let savedName = localStorage.getItem("myname");
  document.getElementById("greet").innerText = "Hello," + savedName + "!";
}

let skills = ["HTML", "CSS", "JS"];
localStorage.setItem("skills", JSON.stringify(skills)); 

let storedSkills = JSON.parse(localStorage.getItem("skills")); 
console.log(storedSkills);  

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerText = task;

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.onclick = () => {
      tasks.splice(index, 1);
      saveAndRender();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

