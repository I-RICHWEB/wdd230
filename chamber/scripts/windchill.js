const temperature = document.querySelector(".temperature");
const speed = document.querySelector(".speed");
const chill = document.querySelector(".chill");
const description = document.querySelector(".condition");
const iconImg = document.querySelector(".weather-icon");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Benin city&units=metric&appid=de891fce8008c3092e6fab058ecea2ab";

getWeatherInfo(url);

async function getWeatherInfo(url) {
  try {
    const weatherApi = await fetch(url);
    if (weatherApi.ok) {
      const weatherInfo = await weatherApi.json();
      //console.log(weatherInfo);
      displayInfo(weatherInfo);
    } else {
      console.log("The weather API fetch was not successful");
    }
  } catch (error) {
    console.log(error);
  }
}

function displayInfo(info) {
  temperature.innerHTML = info.main.temp.toFixed(0);
  description.innerHTML = info.weather[0].description;

  const iconSite = "https://openweathermap.org/img/wn/";
  iconImg.setAttribute("src", `${iconSite}${info.weather[0].icon}@2x.png`);

  speed.innerHTML = info.wind.speed.toFixed(1);

  chill.textContent = windChill(info.main.temp.toFixed(0), info.wind.speed);
}

function windChill(temp, speed) {
  const fahrenheit = (temp * 9) / 5 + 32;

  const mph = speed / 1.609;

  let chill;

  if (fahrenheit <= 50 && mph > 3.0) {
    const calChill =
      35.74 +
      0.6215 * fahrenheit -
      35.75 * mph ** 0.16 +
      0.4275 * fahrenheit * mph ** 0.16;
    chill = calChill.toFixed(1) + " " + "Calm";
  } else {
    chill = "N/A";
  }
  return chill;
}

const weatherLink = document.querySelector(".map");
const siteLink = "https://openweathermap.org/";
const link = document.createElement("a");
link.setAttribute("href", siteLink);
link.setAttribute("target", "blank");
link.textContent = "openweathermap.org";
weatherLink.appendChild(link);

//I am going to code the dynamic spotlight javascript here.
const spotlight = document.querySelector(".spotlight");

function outputSpotlight(datas) {
  const spotlight = document.querySelector(".spotlight");

  //Clear the spotlight
  spotlight.innerHTML = "";

  //Empty array for the random.
  const selection = [];

  for (i = 0; i < 3; i++) {
    let theLength = datas.length;
    let theRandom = Math.floor(Math.random() * theLength);
    if (selection.includes(theRandom)) {
      theRandom = Math.floor(Math.random() * theLength);
      break;
    } else {
      selection.push(theRandom);
      let theData = datas[theRandom];

      if (
        theData.membershipLevel === "gold" ||
        theData.membershipLevel === "silver"
      ) {
        //console.log('it got here!')
        outWork(theData);
      } else {
        theRandom = Math.floor(Math.random() * theLength);
        theData = datas[theRandom];
        outWork(theData);
      }
    }
  }
  selection.length = 0;
}

function outWork(theData) {
  const divContainer = document.createElement("div");
  //Create new elements.
  const name = document.createElement("h2");
  name.textContent = theData.name;
  //Creating the image and set all it values.
  const image = document.createElement("img");
  image.setAttribute("src", theData.image);
  image.setAttribute("alt", `${theData.name} logo.`);
  image.setAttribute("loading", "lazy");
  image.setAttribute("width", "100");
  image.setAttribute("height", "100");
  //Creating the rest of the things.
  const address = document.createElement("p");
  address.textContent = theData.address;

  const breaker = document.createElement("hr");

  // Creating the phone contact.
  const phone = document.createElement("p");
  phone.textContent = theData.PhoneNumber;
  //Creating the link and setting it attribute.
  const link = document.createElement("a");
  link.setAttribute("href", theData.url);
  link.setAttribute("target", "blank");
  link.textContent = "website";

  // Appending the elements to the div container.
  divContainer.appendChild(name);
  divContainer.appendChild(image);
  divContainer.appendChild(address);
  divContainer.appendChild(breaker);
  //creating the email with condition.
  if (theData.emailAddress !== null) {
    const email = document.createElement("p");
    email.textContent = theData.emailAddress;
    email.classList.add("email");
    divContainer.appendChild(email);
  }
  // The end of email.
  divContainer.appendChild(phone);
  divContainer.appendChild(link);

  // Appending the container to the section.
  spotlight.appendChild(divContainer);
}

const fileJson = "./json_file/data.json";
getdata(fileJson);

async function getdata(file) {
  const info = await fetch(file);
  const data = await info.json();
  //console.log(data);
  outputSpotlight(data);
}
