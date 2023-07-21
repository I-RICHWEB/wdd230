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

  or_name.innerHTML = `<strong>Name:</strong> ${window.localStorage.getItem(
    "name"
  )}`;
  or_email.innerHTML = `<strong>Email:</strong> ${window.localStorage.getItem(
    "email"
  )}`;
  or_phone.innerHTML = `<strong>Phone:</strong> ${window.localStorage.getItem(
    "phone"
  )}`;
  or_fruit1.innerHTML = `<strong>Fruit1:</strong> ${window.localStorage.getItem(
    "fruit1"
  )}`;
  or_fruit2.innerHTML = `<strong>Fruit2:</strong> ${window.localStorage.getItem(
    "fruit2"
  )}`;
  or_fruit3.innerHTML = `<strong>Fruit3:</strong> ${window.localStorage.getItem(
    "fruit3"
  )}`;
  or_message.innerHTML = `<strong>instructions:</strong> ${window.localStorage.getItem(
    "instructions"
  )}`;

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
