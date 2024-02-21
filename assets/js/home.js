const navig = document.querySelector(".barre_de_nav");

window.addEventListener('scroll', function(){
  let scrollposition = window.scrollY;
  console.log("scrolled");
  //navig.classList.add('ombre');
  if (scrollposition > 30) {
    navig.classList.add('ombre');
    document.getElementById("but_haut").style.display = "block";
  }
  else {
    navig.classList.remove('ombre')
    document.getElementById("but_haut").style.display = "none";
  }
});

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}