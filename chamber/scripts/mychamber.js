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

//Banner display 
const weekdays = curDate.getDay();
if (weekdays == 1 || weekdays == 2) {
  const banner = document.querySelector('.banner');
  banner.style.display = "block";
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'X';
  closeBtn.style.padding = '5px';
  closeBtn.style.color = 'red';
  closeBtn.style.border = 'none';
  closeBtn.style.backgroundColor = "#fef9ff";
  closeBtn.style.marginLeft = 'auto';
  banner.style.display = 'flex';
  banner.appendChild(closeBtn);
  closeBtn.addEventListener('click', () => {
    banner.style.display = 'none';
  })
}