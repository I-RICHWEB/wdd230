let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

const options = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const imgObserver = new IntersectionObserver((enteries, imgObserver) => {
  enteries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      loadImages(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, options);

imagesToLoad.forEach((image) => {
  imgObserver.observe(image);
});
