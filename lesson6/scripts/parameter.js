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

//option selection script

const select = document.querySelector(".options");
select.addEventListener("change", output);

function output() {
  const value = select.value;
  const para = document.createElement("p");
  const display = document.querySelector(".output");

  switch (value) {
    case "event":
      display.innerHTML = "";
      para.innerHTML =
        "The first parameter is the type of the event (like click, change, mousedown, or any other HTML DOM Event.)";
      display.appendChild(para);
      break;
    case "function":
      display.innerHTML = "";
      para.innerHTML =
        "The second parameter is the function we want to call when the event occurs. It handles the actions the event should exhibit.";
      display.appendChild(para);
      break;
    case "usecapture":
      display.innerHTML = "";
      para.innerHTML =
        "The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional. It default is 'event bubbling'.";
      display.appendChild(para);
      break;
    case "":
      display.innerHTML = "";
  }
}

//usecapture example
document.querySelector(".bub").addEventListener(
  "click",
  () => {
    alert("You click the 'p' element box");
  },
  false
);

document.querySelector(".bub-exam").addEventListener(
  "click",
  () => {
    alert("You also click the 'div' element box.");
  },
  false
);

document.querySelector(".cap").addEventListener(
  "click",
  () => {
    alert("You click the 'p' element box");
  },
  true
);

document.querySelector(".cap-exam").addEventListener(
  "click",
  () => {
    alert("You also click the 'div' element box.");
  },
  true
);
