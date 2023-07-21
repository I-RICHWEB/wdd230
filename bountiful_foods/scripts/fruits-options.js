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





