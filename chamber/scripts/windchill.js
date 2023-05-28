const temperature = document.querySelector(".temperature").textContent;
const speed = document.querySelector(".speed").textContent;
const chill = document.querySelector(".chill");

const conTemp = parseInt(temperature);
const conSpeed = parseFloat(speed);

chill.textContent = windChill(conTemp, conSpeed);

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
