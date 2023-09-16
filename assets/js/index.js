let slideIndex = 0;
showSlide();
closeForm();
function showSlide() {
  let i;
  let slides = document.getElementsByClassName("slide");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlide, 2000);
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function success() {
  alert("Pendaftaran Berhasil");
}
function thanks() {
  alert("Terimkasih atas masukkan anda");
}
