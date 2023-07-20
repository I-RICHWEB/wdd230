const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

getFruits(url);

async function getFruits(url) {
  try {
    const respond = await fetch(url);
    if (respond.ok) {
      const fruits = await respond.json();
      //console.log(fruits);
      displayOptions(fruits);
    } else {
      console.log("The url fetch was not successful.");
    }
  } catch (error) {
    console.log(error);
  }
}

function displayOptions(datas) {
  const choice1 = document.querySelector("#fruit1");
  const choice2 = document.querySelector("#fruit2");
  const choice3 = document.querySelector("#fruit3");

  datas.forEach((fruit) => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");

    option1.setAttribute("value", `${fruit.name}`);
    option1.textContent = `${fruit.name}`;

    option2.setAttribute("value", `${fruit.name}`);
    option2.textContent = `${fruit.name}`;

    option3.setAttribute("value", `${fruit.name}`);
    option3.textContent = `${fruit.name}`;

    choice1.append(option1);
    choice2.append(option2);
    choice3.append(option3);
  });
}

// the thank you respond begins here
const submit_btn = document.querySelector(".submit_btn");
submit_btn.addEventListener("click", () => {
  setOrder();
  thankYou();
});

function thankYou() {
  

  const order = document.querySelector(".order");

  const or_name = document.createElement("p");
  const or_email = document.createElement("p");
  const or_phone = document.createElement("p");
  const or_fruit1 = document.createElement("p");
  const or_fruit2 = document.createElement("p");
  const or_fruit3 = document.createElement("p");
  const or_message = document.createElement("p");

  or_name.innerHTML = `<strong>Name:</strong> ${window.localStorage.getItem("name")}`;
  or_email.innerHTML = `<strong>Email:</strong> ${window.localStorage.getItem("email")}`;
  or_phone.innerHTML = `<strong>Phone:</strong> ${window.localStorage.getItem("phone")}`;
  or_fruit1.innerHTML = `<strong>Fruit1:</strong> ${window.localStorage.getItem("fruit1")}`;
  or_fruit2.innerHTML = `<strong>Fruit2:</strong> ${window.localStorage.getItem("fruit2")}`;
  or_fruit3.innerHTML = `<strong>Fruit3:</strong> ${window.localStorage.getItem("fruit3")}`;
  or_message.innerHTML = `<strong>instructions:</strong> ${window.localStorage.getItem("instructions")}`;

  order.append(or_name);
  order.append(or_email);
  order.append(or_phone);
  order.append(or_fruit1);
  order.append(or_fruit2);
  order.append(or_fruit3);
  order.append(or_message);

  const submitRespond = document.querySelector(".submit_respond");
  submitRespond.style.display = "block";
}

function setOrder() {
  const name = document.querySelector(".name");
  const email = document.querySelector(".email");
  const phone = document.querySelector(".phone");
  const fruit1 = document.querySelector("#fruit1");
  const fruit2 = document.querySelector("#fruit2");
  const fruit3 = document.querySelector("#fruit3");
  const message = document.querySelector(".instructions");


  window.localStorage.setItem("name", name.value);
  window.localStorage.setItem("email", email.value);
  window.localStorage.setItem("phone", phone.value);
  window.localStorage.setItem("fruit1", fruit1.value);
  window.localStorage.setItem("fruit2", fruit2.value);
  window.localStorage.setItem("fruit3", fruit3.value);
  window.localStorage.setItem("instructions", message.value);
}



