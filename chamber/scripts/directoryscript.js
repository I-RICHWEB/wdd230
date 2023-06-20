const fileJson = "./json_file/data.json";

getdata(fileJson);

async function getdata(file) {
  const info = await fetch(file);
  const data = await info.json();
  //console.log(data);
  outputCompanies(data);
}

//Get the article
const container = document.querySelector(".companies");

function outputCompanies(datas) {
  
  
  datas.forEach((data) => {
    //Create the needed elements
    const section = document.createElement("section");
    const image = document.createElement("img");
    const name = document.createElement("h4");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    
    
    const membership = document.createElement("p");
    const link = document.createElement("a");

    //Setting image attribute
    image.setAttribute("src", data.image);
    image.setAttribute("alt", `${data.name} logo.`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "150");
    image.setAttribute("height", "150");

    //Assigning textContent to their informations
    name.textContent = data.name;
    address.textContent = data.address;
    phone.textContent = data.PhoneNumber;
    
    membership.textContent = `Membership-level: ${data.membershipLevel}`;
    link.setAttribute("href", data.url);
    link.setAttribute("target", "blank");
    link.textContent = "website";

    //Populating the container
    section.appendChild(image);
    section.appendChild(name);
    section.appendChild(address);
    section.appendChild(phone);
    if (data.emailAddress !== null) {
      const email = document.createElement("p");
      email.textContent = data.emailAddress;
      email.classList.add('email');
      section.appendChild(email);
    }
    section.appendChild(membership);
    section.appendChild(link);

    // Populating the article
    container.appendChild(section);
  });
}

//button alternation
const grid = document.querySelector('.grid-btn');
const listBtn = document.querySelector('.list-btn');

grid.addEventListener('click', () => {
  container.classList.add('companies');
  container.classList.remove('list');
})

listBtn.addEventListener('click', () => {
  container.classList.add('list');
  container.classList.remove('companies');
})