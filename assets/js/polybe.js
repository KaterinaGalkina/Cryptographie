let input_bin2 = document.getElementById("text_crypter2");
let mot_cle = document.getElementById("cle_carre");
const alphabet='abcdefghijklmnopqrstuvwxyz';
const alph_maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function ajout_mot_de_passe() {
  let new_carre = [[0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0],
                  [0,0,0,0,0]];
  let k=0
  let j=0
  for (let i = 0; i < mot_cle.lenght; i++) {
    if (j==new_carre.lenght) {
      k=0;
      j=0;
    }
  }
}

function recupere_texte(){
  let txt = input_bin2.value;
  return txt;
};

function un_pas(){
  let decall = input_mot_clee.value;
  return decall;
};

let carre = [["a","b","c","d","e"],
        ["f","g","h","i/j","k"],
        ["l","m","n","o","p"],
        ["q","r","s","t","u"],
        ["v","w","x","y","z"]];

function recherche_lettre_codee(lettre_claire) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (lettre_claire==carre[i][j] || 
          ((lettre_claire=="i" && carre[i][j]=="i/j") || 
           (lettre_claire=="j" && carre[i][j]=="i/j"))) {
        if (i+1>=carre.length) {
          return carre[0][j];
        } else {
          return carre[i+1][j];
        }
      }
    }
  }
}

function recherche_coo(lettre_claire) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (carre[i][j]==lettre_claire) {
        coo=(i,j)
      }
    }
  }
  return coo
}

function codage_pol_n3() {
  let former_txt = recupere_texte()
  let new_txt = ""
  let lst = Array(former_txt.length).fill('zzcc')
  let lst_abs=[]
  let lst_ord=[]
  for (let i = 0; i < former_txt.length; i++) {
    if (alphabet.includes(former_txt[i])) {
      a,b = recherche_coo(lettre_claire)
      lst_abs.push(a)
      lst_ord.push(b)
    } else {
      lst[i]=former_txt[i]
    }
  }
  lst_abs+=lst_ord
  let lerrr=''
  for (let i=0; i<(lst_abs.length)/2; i++) {
    lerrr+=carre[i][i+1]
    i+=1
  }
  for (let i=0; i<lerrr.length; i++) {
    if (lst[i]=='zzcc') {
      lst[i]=lerrr[i]
    }
  }
  return new_txt       
}

function codage_pol_n1() {
  let former_txt = recupere_texte()
  let new_txt = ""
  for (let i = 0; i < former_txt.length; i++) {
    if (alphabet.includes(former_txt[i])) {
    new_txt+=recherche_lettre_codee(former_txt[i])
    } else {
      new_txt+=former_txt[i]
    }
  }
  return new_txt       
}

function recherche_lettre_decodee(lettre_codee) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (lettre_codee==carre[i][j] || 
          ((lettre_codee=="i" && carre[i][j]=="i/j") || 
           (lettre_codee=="j" && carre[i][j]=="i/j"))) {
        if (i-1<0) {
          return carre[4][j];
        } else {
          return carre[i-1][j];
        }
      }
    }
  }
}

function codage_pol_n2() {
  let former_txt = recupere_texte();
  let new_txt = "";
  for (let i = 0; i < former_txt.length; i++) {
    if (alphabet.includes(former_txt[i])) {
    new_txt+=recherche_lettre_decodee(former_txt[i])
    } else {
      new_txt+=former_txt[i];
    }
  }
  return new_txt;   
}