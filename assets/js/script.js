const lst = ["Katia", "katia", "G568GVGWHJ8", "DLI0P86KG34", "kiki"];

let input = document.getElementById("user");
const testbtn = document.getElementById("myBtn");

function butt(){
  let text = input.value;
  return text;
}

function test() {
  if (lst.includes(butt())) {
      location.href = "home.html";
  } else {
    alert("Erreur");
  }
}

testbtn.addEventListener("click", test);