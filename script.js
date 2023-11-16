console.log("Bonjour");
/////////////////////////
//Les fonctions/////////
////////////////////////

function myFct() {
  //Code
  console.log("Hello World!");
  console.log("Comment ça va");
}

myFct(); // Appel de la focntion

function myFct2(msg) {
  console.log("le message est :", msg);
}

myFct2("SECRET DEFENSE !");
myFct2("61");
let varTexte = "Message de la variable";

myFct2("VarTexte");

function myFct3(msg, msg2 = "RIEN") {
  console.log(msg);
  console.log(msg2);
  console.log(msg + "" + msg2);
}
myFct3(varTexte, "Texte en clair");
myFct3("Un seul param");
