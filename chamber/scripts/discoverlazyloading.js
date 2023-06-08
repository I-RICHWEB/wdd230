const places = document.querySelectorAll("[data-src]");

function loadPicture(image) {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  }
}

const options = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
};

const placesObserver = new IntersectionObserver((entries, placesObserver) => {
  
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      loadPicture(entry.target);
      placesObserver.unobserve(entry.target);
      
    }
  });
}, options);

places.forEach((place) => {
  
  placesObserver.observe(place);
  
});


//visits 
const visits = document.querySelector('#visits');

if (!localStorage.getItem('visits')) {
  storeVisits();
  visits.innerHTML = 'This is your first visit to the chamber discovery page.'
} else {
  difference();
}

function storeVisits() {
  window.localStorage.setItem("visits", Date.now());
}

function difference() {
  const lastvisit = Number(window.localStorage.getItem('visits'));
  const theDateNow = Number(Date.now());
  let theDifference = theDateNow - lastvisit;
  let cal = theDifference / 86400000;
  visits.innerHTML = cal.toFixed(0) + " " + "Day(s) since your last visit.";

  window.localStorage.removeItem('visits');
  storeVisits();
}
