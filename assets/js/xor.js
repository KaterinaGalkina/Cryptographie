let input_bin2 = document.getElementById("text_crypter2");
let input_mot_clee = document.getElementById("mot-cle");

function recupere_texte(){
  let txt = input_bin2.value;
  return txt;
}

function un_pas(){
  let decall = input_mot_clee.value;
  return decall;
}

function decodage_xor() {
  let ancient_text=recupere_texte(), nouveau_text='';
  let mot_cle=un_pas(), lst=[], ch='';
  for (let i = 0; i<ancient_text.length; i++) {
    lettre_dec = ancient_text[i];
    if (lettre_dec!=" ") {
      ch+=lettre_dec
    } else {
      lst.push(ch);
      ch='';
    }
  }
  if (ch.length!=0) {
    lst.push(ch)
    ch='';
  }
  
  let lst_mot_cle = []
  for (let i = 0; i<mot_cle.length; i++) {
    lettre_dec = mot_cle[i];
    if (lettre_dec!=" ") {
      ch+=lettre_dec
    } else {
      lst_mot_cle.push(ch);
      ch='';
    }
  }
  if (ch.length!=0) {
    lst_mot_cle.push(ch)
  }
  let j=0
  for (let i=0; i<lst.length; i++) {
    if (j==lst_mot_cle.length) {
      j=0
    }
    nouveau_text += parseInt(lst[i]^lst_mot_cle[j]) + " ";
  }
  return nouveau_text;
}
function codage_xor() {
  let ancient_text=recupere_texte(), nouveau_text='';
  let mot_cle=un_pas(), lst=[], ch='';
  for (let i = 0; i<ancient_text.length; i++) {
    lettre_dec = ancient_text[i];
    if (lettre_dec!=" ") {
      ch+=lettre_dec
    } else {
      lst.push(ch);
      ch='';
    }
  }
  if (ch.length!=0) {
    lst.push(ch)
    ch='';
  }
  
  let lst_mot_cle = []
  for (let i = 0; i<mot_cle.length; i++) {
    lettre_dec = mot_cle[i];
    if (lettre_dec!=" ") {
      ch+=lettre_dec
    } else {
      lst_mot_cle.push(ch);
      ch='';
    }
  }
  if (ch.length!=0) {
    lst_mot_cle.push(ch)
  }
  let j=0
  for (let i=0; i<lst.length; i++) {
    if (j==lst_mot_cle.length) {
      j=0
    }
    nouveau_text += parseInt(lst[i]^lst_mot_cle[j]) + " ";
  }
  return nouveau_text;
}

const navig = document.querySelector(".barre_de_nav");

window.addEventListener('scroll', function(){
  let scrollposition = window.scrollY;
  console.log("scrolled");
  if (scrollposition > 30) {
    navig.classList.add('ombre');
    document.getElementById("but_haut").style.display = "block";
  } else {
    navig.classList.remove('ombre')
    document.getElementById("but_haut").style.display = "none";
  }
});

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}