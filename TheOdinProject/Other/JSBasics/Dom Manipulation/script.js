let container = document.querySelector("#container");

let paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "This is a red paragraph";
container.appendChild(paragraph);

let header3 = document.createElement("h3");
header3.style.color = "blue";
header3.textContent = "This is a blue header";
container.insertBefore(header3, paragraph);

let secondContainer = document.createElement("div");
secondContainer.style.backgroundColor = "pink";
document.body.appendChild(secondContainer);

let header1 = document.createElement("h1");
header1.textContent = "I am in a div";
secondContainer.appendChild(header1);

let paragraph2 = document.createElement("p");
paragraph2.style.color = "red";
paragraph2.textContent = "This is another red paragraph";
secondContainer.appendChild(paragraph2);
