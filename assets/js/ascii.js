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

// Binaire
let input_bin = document.getElementById("text_bin");

function codage_bin_to_dec() {
  let ancient_text=input_bin.value, nouveau_text='';
  let lst=[], ch='';
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
  for (let i=0; i<lst.length; i++) {
    decimal = parseInt(lst[i],2);
    nouveau_text+=decimal.toString(10) + " "
  }
  return nouveau_text;
}

function codage_bin_to_hex() {
  let ancient_text=input_bin.value, nouveau_text='';
  let lst=[], ch='';
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
  for (let i=0; i<lst.length; i++) {
    hexadecimal = (parseInt(lst[i],2)).toString(16);
    nouveau_text+=hexadecimal + " "
  }
  return nouveau_text;
}

function codage_bin_to_oct() {
  let ancient_text=input_bin.value, nouveau_text='';
  let lst=[], ch='';
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
  for (let i=0; i<lst.length; i++) {
    hexadecimal = (parseInt(lst[i],2)).toString(8);
    nouveau_text+=hexadecimal + " "
  }
  return nouveau_text;
}

// Decimal
let input_dec = document.getElementById("text_dec");

function codage_dec_to_bin() {
  let ancient_text=input_dec.value, nouveau_text='';
  let lst=[], ch='';
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
  for (let i=0; i<lst.length; i++) {
    binaire = (lst[i]-0).toString(2);
    nouveau_text+=binaire + " "
  }
  return nouveau_text;
}

function codage_dec_to_oct() {
  let ancient_text=input_dec.value, nouveau_text='';
  let lst=[], ch='';
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
  for (let i=0; i<lst.length; i++) {
    binaire = (lst[i]-0).toString(8);
    nouveau_text+=binaire + " "
  }
  return nouveau_text;
}

function codage_dec_to_hex() {
  let ancient_text=input_dec.value, nouveau_text='';
  let lst=[], ch='';
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
  for (let i=0; i<lst.length; i++) {
    binaire = (lst[i]-0).toString(16);
    nouveau_text+=binaire + " "
  }
  return nouveau_text;
}

// Hexadecimal
let input_hex = document.getElementById("text_hex");

function codage_hex_to_bin() {
  let ancient_text=input_hex.value, nouveau_text='';
  let lst=[], ch='';
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
  for (let i=0; i<lst.length; i++) {
    binaire = (parseInt(lst[i],16)).toString(2);
    nouveau_text+=binaire + " "
  }
  return nouveau_text;
}

function codage_hex_to_oct() {
  let ancient_text=input_hex.value, nouveau_text='';
  let lst=[], ch='';
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
  for (let i=0; i<lst.length; i++) {
    binaire = (parseInt(lst[i],16)).toString(8);
    nouveau_text+=binaire + " "
  }
  return nouveau_text;
}

function codage_hex_to_dec() {
  let ancient_text=input_hex.value, nouveau_text='';
  let lst=[], ch='';
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
  for (let i=0; i<lst.length; i++) {
    binaire = (parseInt(lst[i],16)).toString(10);
    nouveau_text+=binaire + " "
  }
  return nouveau_text;
}

// Octal
let input_oct = document.getElementById("text_oct");

function codage_oct_to_bin() {
  let ancient_text=input_oct.value, nouveau_text='';
  let lst=[], ch='';
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
  for (let i=0; i<lst.length; i++) {
    binaire = (parseInt(lst[i],8)).toString(2);
    nouveau_text+=binaire + " "
  }
  return nouveau_text;
}

function codage_oct_to_dec() {
  let ancient_text=input_oct.value, nouveau_text='';
  let lst=[], ch='';
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
  for (let i=0; i<lst.length; i++) {
    binaire = (parseInt(lst[i],8)).toString(10);
    nouveau_text+=binaire + " "
  }
  return nouveau_text;
}

function codage_oct_to_hex() {
  let ancient_text=input_oct.value, nouveau_text='';
  let lst=[], ch='';
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
  for (let i=0; i<lst.length; i++) {
    binaire = (parseInt(lst[i],8)).toString(16);
    nouveau_text+=binaire + " "
  }
  return nouveau_text;
}

//chaine de caracteres
let input_char = document.getElementById("text_char");

function codage_char_to_dec() {
  let nouveau_text='', ancient_text=input_char.value;
  for (let i=0; i<ancient_text.length; i++) {
    nouveau_text+=(ancient_text.charCodeAt(i)).toString(10)+" "
  }
  return nouveau_text;
}

function codage_char_to_oct() {
  let nouveau_text='', ancient_text=input_char.value;
  for (let i=0; i<ancient_text.length; i++) {
    nouveau_text+=(ancient_text.charCodeAt(i)).toString(8)+" ";
  }
  return nouveau_text;
}

function codage_char_to_bin() {
  let nouveau_text='', ancient_text=input_char.value;
  for (let i=0; i<ancient_text.length; i++) {
    nouveau_text+=(ancient_text.charCodeAt(i)).toString(2)+" ";
  }
  return nouveau_text;
}

function codage_char_to_hex() {
  let nouveau_text='', ancient_text=input_char.value;
  for (let i=0; i<ancient_text.length; i++) {
    nouveau_text+=(ancient_text.charCodeAt(i)).toString(16)+" ";
  }
  return nouveau_text;
}

