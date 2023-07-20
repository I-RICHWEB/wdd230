const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

getFruits(url);


async function getFruits(url) {
    try {
        const respond = await fetch(url);
        if (respond.ok) {
            const fruits = await respond.json();
            //console.log(fruits);
            fruitsGallary(fruits);
        } else {
            console.log('The url fetch was not successful.')
        };
    } catch (error){
        console.log(error);
    }
}

let imagePath = "images/";

function fruitsGallary(datas) {
    const container = document.querySelector('.fruits_gallary');
    

    datas.forEach((data) => {
        const cards = document.createElement("div");

        const image = document.createElement('img');
        const name = document.createElement("h3");
        const family = document.createElement("p");

        image.setAttribute('src', `${imagePath}${data.name}.jpg`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('alt', `${data.name} image`);

        name.innerHTML = `Name: <strong>${data.name}</strong>`;
        family.innerHTML = `Family: <strong>${data.family}</strong>`;

        cards.append(image);
        cards.append(name);
        cards.append(family);

        container.append(cards);
    });


}