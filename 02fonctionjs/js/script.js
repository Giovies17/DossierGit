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
  console.log(msg + " " + msg2);
}
myFct3(varTexte, "Texte en clair");
myFct3("Un seul param");

//Ecrire une Fct qui prend 2 param en entrée
//Cette fct doit afficher le resultat de la multiplication des params.
//Si un parametre est manquant, la valeur par défaut est 1.

//Focntion multiplication:
//Entrée : 2 param type num.
//Si 2 ème param absent, valeur par defaut 1.
// Sortie : Affichage console.
function multiplication(nb1, nb2 = 1) {
  if (typeof nb1 == "number" && typeof nb2 == "number") {
    console.log(nb1 * nb2);
  } else {
    console.log("Il faut des nombres en entrée!");
  }
}

multiplication(2, 3);

//////////////////////////////
// Les fonctions avec Return//
//////////////////////////////

// Fonction square
//Entrée : 1 param de type num.
// Si pas de param : Errreur
//Sortie : return de arg * arg
function square(arg) {
  if (typeof arg == "number") {
    return arg * arg;
  } else {
    return "Erreur : entrez un nombre";
  }
}
console.log(square("fefr"));

// Fonction square2
//Entrée : 1 param de type num.
// Si pas de param : Ignore l'appel
//Sortie : return de arg * arg
function square2(arg) {
  if (typeof arg != "number") {
    return "";
    console.log("Erreur"); // Ne sera jamais exécuté
  } else return arg * arg;
}

console.log(square2("bbbfv"));

// Ecrire une function qui retourne la concaténation de 2 parametres et stocker le resultat de
//la fct dans une variable MaConcat.

//Entrée : 2 parametres. Si 2nd asbsent : chaine vide par defaut.
//Sortie : return concaténation de pUn et pDeux.
function maFctConcat(pUn, pDeux) {
  return pUn.toString() + pDeux;
}
console.log(maFctConcat(2, 5));
console.log(maFctConcat("toto", 5));
console.log(maFctConcat(2, "titi"));
console.log(maFctConcat("tutu", "truc"));

// Faire une fct qui retourne en booleen si nb est positif
////////////////////////////////
// Mes resultat de l'exercice
////////////////////////////////
//function booleenFct() {
// if (12 > 0) {
// return ("nombre est positif");
// } else {
//   ("nombre est nul");
// }
//}
//console.log(booleenFct(2));

function isPositive(nb = 0) {
  if (parseFloat(nb)) return parseFloat(nb) >= 0;
  else return "Errreur: Entrer un nombre";
}

console.log("POSITIF ?");
console.log("10", isPositive(10));
console.log("-10", isPositive(-10));
console.log("10", isPositive(0.1));
console.log("tata", isPositive("tata"));

//declarer 3 nb dans des variables
//creer une fct qui retourne la moy des 3 nb

//let number = (5,3,2);
//let chiffre = (2,6,9);
//let texte = (7,8,1);
//let moy = number + chiffre + texte;
//let moyenne = number + chiffre + texte  / 3;

//function resultat (moyenne){

//}
//console.log(moyenne)

///correction exercice du dessus///

let a = 2,
  b = 7,
  c = 5;
//fonction average
//entréé : queue d'elle
//sortie : Moyenne des 3 variables globales a, b, c.

function average() {
  return (a + b + c) / 3;
}
console.log(average());

//Faire une fct qui prend 3 nb en parametres et retourne la moy

var d = 4,
  e = 5,
  f = 6;

//exercice//
///function rate(){
/// return(d + e + f) / 3;
//}
//console.log(rate())

function average2(nb1, nb2=0, nb3=0) {
  if (typeof (nb1, nb2, nb3) == "number") {
    return (nb1 + nb2 + nb3) / 3;
  } else {
    return "Saisir des nombres";
  }
}
console.log("------------------------------");
console.log(average2(10, 20, 30));
console.log(average2(10));
console.log(average2('10'));
console.log(average2("goal"));
console.log(average2(10, 20, "titi"));

// REST parameters. Basés sur le spread d'un tableau.

function sum(...args){
  let total = 0;
  for (const arg of args) {
    total += arg;
  } 
return total;

}
console.log('Fonction SUM spredée', sum(1, 2, 3)); // Expected : 6
console.log('Fonction SUM spredée', sum(1, 2, 3, 4)); // Expected : 10
