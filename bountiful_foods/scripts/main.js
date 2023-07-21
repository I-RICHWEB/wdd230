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


const areas = document.querySelector("#areas");
areas.addEventListener('change', citySummary);

function citySummary() {
  let la_jolla =
    "La Jolla is a smart seaside area, known for its rugged coastline. Trails wind past pine trees and sandstone canyons in Torrey Pines State Natural Reserve, while the 2 courses at world-renowned Torrey Pines Golf Course sit atop sea cliffs. La Jolla Cove has sweeping ocean views, and the Shell Beach tide pools are home to anemones and crabs. Posh boutiques and waterfront restaurants dot walkable La Jolla Village.";

  let monterey_bay =
    "Monterey Bay is a bay of the Pacific Ocean located on the coast of the U.S. state of California, south of the San Francisco Bay Area. San Francisco itself is further north along the coast, by about 75 miles, accessible via Highway 1 and Highway 280.";

  let morro_bay =
    "Morro Bay is a coastal city in California. It's known for Morro Rock, an ancient volcanic mound at the end of Morro Rock Beach. The rock sits within Morro Bay State Park, home to lagoons, trails and a bird-rich saltwater marsh. Morro Bay State Park’s Museum of Natural History features exhibits on ecology and local Native American culture. Trails lead up Black Hill for views over the city and Morro Bay.";

  let santa_babara =
    "Santa Barbara is a city on the central California coast, with the Santa Ynez Mountains as dramatic backdrop. Downtown, Mediterranean-style white stucco buildings with red-tile roofs reflect the city’s Spanish colonial heritage. Upscale boutiques and restaurants offering local wines and seasonal fare line State Street. On a nearby hill, Mission Santa Barbara, founded in 1786, houses Franciscan friars and a museum.";

  
  let city_name = document.querySelector(".city_name");
  let city_info = document.querySelector(".city_info");
  let cityAreas = areas.value;
  switch (cityAreas) {
    case "La Jolla":
      city_name.textContent = cityAreas;
      city_info.textContent = la_jolla;

      break;
    case "Monterey Bay":
      city_name.textContent = cityAreas;
      city_info.textContent = monterey_bay;
      break;
    case "Morro Bay":
      city_name.textContent = cityAreas;
      city_info.textContent = morro_bay;
      break;
    case "Santa Barbara":
      city_name.textContent = cityAreas;
      city_info.textContent = santa_babara;
  }
}



