// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=de891fce8008c3092e6fab058ecea2ab";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const imgUrl = "https://openweathermap.org/img/wn/";
    
    const iconsrc = `${imgUrl}${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
}
