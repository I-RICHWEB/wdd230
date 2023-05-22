const year = document.querySelector("#year");
const update = document.querySelector("#update");
let newDate = new Date();
year.innerHTML = newDate.getFullYear();
const option = {
  weekday: "short",
  day: "numeric",
  month: "long",
  year: "numeric",
};
update.innerHTML = document.lastModified;

//Button click event
const btn = document.querySelector(".arrange");
const flexCon = document.querySelector(".con");
flexCon.style.display = "flex";
let direction = "row";
btn.addEventListener("click", arrange);

function arrange() {
  if (direction == "row") {
    flexCon.style.flexDirection = "column";
    direction = "column";
  } else {
    flexCon.style.flexDirection = "row";
    direction = "row";
  }
}

//window resizing

window.addEventListener("resize", () => {
  document.querySelector(".random").innerHTML = Math.random();
});

//Selection changes
const selection = document.querySelector(".select");
selection.addEventListener("change", change);
const shape = document.querySelector(".color");

function change() {
  const keyValue = selection.value;

  switch (keyValue) {
    case "pink":
      shape.style.backgroundColor = "pink";
      break;
    case "purple":
      shape.style.backgroundColor = "purple";
      break;
    case "orange":
      shape.style.backgroundColor = "orange";
      break;
    case "green":
      shape.style.backgroundColor = "green";
      break;
    case "empty":
      shape.style.backgroundColor = "gray";
  }
}

//Move over
const element = document.querySelector(".move");
element.addEventListener("mousemove", () => {
  element.style.backgroundColor = "blue";
});
//multiple addEventListener method on one element
element.addEventListener("click", () => {
  document.querySelector(".more").innerHTML = 100 * 200;
});

//Adding a function with parameter

element.addEventListener("dblclick", () => {
  para(2000, 20);
});

function para(a, b) {
  document.querySelector(".mul-para").innerHTML = a / b;
}
