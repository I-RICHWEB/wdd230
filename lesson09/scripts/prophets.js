const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets); // note that we reference the prophet array of the data object given the structure of the json file
  let prophets = data.prophets;
  //Calling the displayProphets function.
  displayProphets(prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards"); // select the output container element
  //console.log(prophets);
  let position = 0;
  let surfix;

  prophets.forEach((prophet) => {
    position += 1;
    switch (position) {
      case 1:
        surfix = "st";
        break;
      case 2:
        surfix = 'nd';
        break;
      case 3:
        surfix = 'rd';
        break;
      case 4:
        surfix = 'th';
    }

    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let age = document.createElement("p");
    let birthplace = document.createElement("p");
    let length = document.createElement("p");
    let birthday = document.createElement("p");
    

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname} - ${position}${surfix} Latter-day President`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    //building the other elements
    let deathAge = 0;
    if (prophet.death !== null) {

      const birthdate = new Date(prophet.birthdate);
      const birthYear = birthdate.getFullYear();
      
      const deathdate = new Date(prophet.death);
      const deathYear = deathdate.getFullYear();

      deathAge = deathYear - birthYear;

    } else {
      const birthdate = new Date(prophet.birthdate);
      const birthYear = birthdate.getFullYear();

      const currentD = new Date();
      const year = currentD.getFullYear();

      deathAge = year - birthYear;
    }
    
    age.textContent = `Age: ${deathAge}`;
    birthplace.textContent = `Birth Place: ${prophet.birthplace}`;
    length.textContent = `Length Of Service: ${prophet.length} year(s)`;
    birthday.textContent = `Date Of Birth: ${prophet.birthdate}`;

    // Append the section(card) with the created elements

    card.appendChild(h2);
    card.appendChild(birthplace);
    card.appendChild(birthday);
    card.appendChild(age);
    card.appendChild(length);
    card.appendChild(portrait);

    cards.appendChild(card);
  });// end of forEach loop
} // end of function expression

