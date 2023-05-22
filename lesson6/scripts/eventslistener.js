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
