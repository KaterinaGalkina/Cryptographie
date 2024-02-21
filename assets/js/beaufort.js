let input_bin = document.getElementById("text_crypter_beaufort");
let input_pas = document.getElementById("mot_cle_beaufort");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alph_maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function recupere_texte() {
  let txt = input_bin.value;
  return txt;
}

function mot_cle() {
  let decall = input_pas.value;
  return decall;
}

function recherche_numero(lettre) {
  for (let i = 0; i < alphabet.length; i++) {
    if (lettre == alphabet[i]) {
      return i;
    };
  };
};

function recherche_numero_maj(lettre) {
  for (let i = 0; i < alph_maj.length; i++) {
    if (lettre == alph_maj[i]) {
      return i;
    };
  };
};

function recherche_lettre(num) {
  return alphabet[num];
};

function recherche_lettre_maj(num) {
  return alph_maj[num];
};

function codage_beaufort() {
  let ancient_text=recupere_texte();
  let nouveau_text='';
  let cle = mot_cle();
  let lst=[];
  let j=-1;
  let num_lettre_initiale = null;
  let num_lettre_codee = null;
  for (let i = 0; i < cle.length; i++) {
    lst.push(recherche_numero(cle[i]));
  };
  for (let i = 0; i < ancient_text.length; i++) {
    if (alphabet.includes(ancient_text[i])) {
      j+=1;
      if (j == lst.length) {
        j=0;
      };
      num_lettre_initiale = recherche_numero(ancient_text[i]);
  	  num_lettre_codee = lst[j] - num_lettre_initiale;
      if (num_lettre_codee<0) {
        num_lettre_codee+=26;
      };
      nouveau_text+= recherche_lettre(num_lettre_codee);
    } else if (alph_maj.includes(ancient_text[i])) {
      j+=1;
      if (j == lst.length) {
        j=0;
      };
      num_lettre_initiale = recherche_numero_maj(ancient_text[i]);
  	  num_lettre_codee = lst[j] - num_lettre_initiale;
      if (num_lettre_codee<0) {
        num_lettre_codee+=26;
      };
      nouveau_text+= recherche_lettre_maj(num_lettre_codee);
    } else {
      nouveau_text+=ancient_text[i];
    };
  };
  return nouveau_text;
}

function decodage_beaufort() {
  let ancient_text=recupere_texte();
  let nouveau_text='';
  let cle = mot_cle();
  let lst=[];
  let j=-1;
  let num_lettre_initiale = null;
  let num_lettre_codee = null;
  for (let i = 0; i < cle.length; i++) {
    lst.push(recherche_numero(cle[i]));
  };
  for (let i = 0; i < ancient_text.length; i++) {
    if (alphabet.includes(ancient_text[i])) {
      j+=1;
      if (j == lst.length) {
        j=0;
      };
      num_lettre_initiale = recherche_numero(ancient_text[i]);
  	  num_lettre_codee = lst[j] - num_lettre_initiale;
      if (num_lettre_codee<0) {
        num_lettre_codee+=26;
      };
      nouveau_text+= recherche_lettre(num_lettre_codee);
    } else if (alph_maj.includes(ancient_text[i])) {
      j+=1;
      if (j == lst.length) {
        j=0;
      };
      num_lettre_initiale = recherche_numero_maj(ancient_text[i]);
  	  num_lettre_codee = lst[j] - num_lettre_initiale;
      if (num_lettre_codee<0) {
        num_lettre_codee+=26;
      };
      nouveau_text+= recherche_lettre_maj(num_lettre_codee);
    } else {
      nouveau_text+=ancient_text[i];
    };
  };
  return nouveau_text;
}

const navig = document.querySelector(".barre_de_nav");

window.addEventListener('scroll', function(){
  let scrollposition = window.scrollY;
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