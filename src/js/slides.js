// function sayHi(){
//     alert('hi');
// }
// function sayIt(){
//     alert('taylor swift >>>');
// }

// var pathnames = ['src/img/amanda and katherine.jpg', 'hello'];
// function rotateSlide(count){
//     count++;
//     return pathnames[count%pathnames.length];
// }

var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var length = slides.length;
  for (i = 0; i < length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex = ((slideIndex % length) + length ) % length;
  slides[slideIndex].style.display = "block";
} 