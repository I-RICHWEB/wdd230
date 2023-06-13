const newDate = new Date();
const meDate = newDate.toDateString();
const meTime = newDate.toTimeString();
document.querySelector("#formdate").value = meDate + " " + meTime;