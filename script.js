const birthDate = new Date(2011, 11, 25, 12, 23, 46, 988);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const birthPassed = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())
if(!birthPassed)
    age--;
document.getElementById("age").textContent=age;


document.getElementById("prev").addEventListener("click", () => plusSlides(-1));
document.getElementById("next").addEventListener("click", () => plusSlides(1));

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("image");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}