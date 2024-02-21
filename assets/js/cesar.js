let input_bin = document.getElementById("text_crypter");
//const valid_btn = document.getElementById("button_cod");
let input_pas = document.getElementById("un_pas_text_crypter");
const alph_min = "abcdefghijklmnopqrstuvwxyz";
const alph_maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function recupere_texte(){
  let txt = input_bin.value;
  return txt;
}

function un_pas(){
  let decall = input_pas.value;
  return decall;
}

function codage_cesar() {
  let new_text = "";
  let former_text = recupere_texte();
  let lettre = 0;
  let pas = parseInt(un_pas())%26;
  for (let i = 0; i < former_text.length; i++) {
    if (alph_min.includes(former_text[i])) {
      lettre = former_text.charCodeAt(i)-97;
      lettre += pas;
      if (lettre > 25) {
        lettre -= 26;
      } else if (lettre < 0) {
        lettre += 26;
      }
      lettre = alph_min[lettre];
      new_text += lettre;
    } else if (alph_maj.includes(former_text[i])) {
      lettre = former_text.charCodeAt(i)-65;
      lettre += pas;
      if (lettre > 25) {
        lettre -= 26;
      } else if (lettre < 0) {
        lettre += 26;
      }
      lettre = alph_maj[lettre];
      new_text += lettre;
    } else {
      new_text += former_text[i];
    }
  }
  return new_text;
}

function decodage_cesar() {
  let new_text = "";
  let former_text = recupere_texte();
  let lettre = 0;
  let pas = -parseInt(un_pas())%26;
  for (let i = 0; i < former_text.length; i++) {
    if (alph_min.includes(former_text[i])) {
      lettre = former_text.charCodeAt(i)-97;
      lettre += pas;
      if (lettre > 25) {
        lettre -= 26;
      } else if (lettre < 0) {
        lettre += 26;
      }
      lettre = alph_min[lettre];
      new_text += lettre;
    } else if (alph_maj.includes(former_text[i])) {
      lettre = former_text.charCodeAt(i)-65;
      lettre += pas;
      if (lettre > 25) {
        lettre -= 26;
      } else if (lettre < 0) {
        lettre += 26;
      }
      lettre = alph_maj[lettre];
      new_text += lettre;
    } else {
      new_text += former_text[i];
    }
  }
  return new_text;
}

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