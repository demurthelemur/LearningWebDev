const boxArray = [];
const container = document.querySelector("#container");

for (let i = 0; i < 30; i++) {
  for (let j = 0; j < 30; j++) {
    let box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    boxArray.push(box);
    box.addEventListener("click", () => {
      color(box);
    });
  }
}

function color(box) {
  var bgColor = window
    .getComputedStyle(box, null)
    .getPropertyValue("background-color");
  if (bgColor === "rgb(18, 230, 145)") {
    box.style.backgroundColor = "white";
  } else {
    box.style.backgroundColor = "#12e691";
  }
}
