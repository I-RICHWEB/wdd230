// Starting with the dates
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector('.year').textContent = currentYear;
document.querySelector('.modify').textContent = `modify: ${document.lastModified}`;
const headerDate = document.querySelector('.date');

const option = {
  weekday: "short",
  day: "numeric",
  month: "long",
    year: "numeric"
};

headerDate.textContent = currentDate.toLocaleString('en-en', option);

// Starting the menu button from here
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu');

const menuBtn = document.querySelector('.tuggle_btn');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuIcon.classList.toggle("open");
})



