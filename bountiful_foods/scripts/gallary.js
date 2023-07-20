//Start of the slideshow gallary js code
let slideIndex = 0;
slideGallary();

function slideGallary() {
  let i;
  let slide = document.getElementsByClassName("myslides");
  let dot = document.getElementsByClassName("dot");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slide.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" actives", "");
  }
  slide[slideIndex - 1].style.display = "block";
  dot[slideIndex - 1].className += " actives";
  setTimeout(slideGallary, 4000);
}
