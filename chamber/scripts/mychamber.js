//Getting the year and assisgning it to the &copy sign.
const curDate = new Date();
const copyYear = document.querySelector("#year");
copyYear.innerHTML = curDate.getFullYear();

//assigning the current date for the header
const currentDate = document.querySelector(".date");
const option = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
currentDate.innerHTML = curDate.toLocaleDateString("en-en", option);

// settingg the lastModified Date
const lastUpdate = document.querySelector("#modify");
lastUpdate.innerHTML = document.lastModified;

//defining and setting the toggle feature for the menu button
const menuBtn = document.getElementById("menu-btn");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("open");
  menuBtn.classList.toggle("open");
});
