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
    chill = N / A;
  }
  return chill;
}

const weatherLink = document.querySelector('.map');
const siteLink = "https://openweathermap.org/";
const link = document.createElement('a');
link.setAttribute('href', siteLink);
link.setAttribute("target", "blank");
link.textContent = "openweathermap.org";
weatherLink.appendChild(link);