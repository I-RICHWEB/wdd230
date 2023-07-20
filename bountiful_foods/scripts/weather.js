//Weather information js code start from here
const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&appid=de891fce8008c3092e6fab058ecea2ab"  
getWeather(url);

async function getWeather(url) {
    try {
        const respond = await fetch(url);
        if (respond.ok) {
            const datas = await respond.json();
            //console.log(datas);
            setWeather(datas);
        } else {
            console.log('The url fetch request was not successful');
        }
    } catch (error) {
        console.log(error);
    }
}

let imageUrl = "https://openweathermap.org/img/wn/";

function setWeather(datas) {
    const icon = document.querySelector(".weather_icon");
    const condition = document.querySelector(".condition");
    const temperature = document.querySelector(".cur_temp");
    const humidity = document.querySelector(".humidity");

    icon.setAttribute("src", `${imageUrl}${datas.weather[0].icon}@2x.png`);
    icon.setAttribute('alt', 'weather icon')

    condition.innerHTML = `<strong>${datas.weather[0].description}</strong>`;
    temperature.innerHTML = `<strong>${datas.main.temp}</strong>`;
    humidity.innerHTML = `<strong>${datas.main.humidity}</strong>`;
}