// Javascript code for image-slider variable on home page
// Check tiny-slider documentation for information on
// changing the attributes below.
var slider = tns({
  container: ".my-slider",
  items: 3,
  gutter: 20,
  slideBy: 1,
  controlsPosition: "bottom",
  navPosition: "bottom",
  mouseDrag: true,
  autoplay: true,
  autoplayButtonOutput: false,
  controlsContainer: ".control",
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1440: {
      items: 3
    }
  }
});
