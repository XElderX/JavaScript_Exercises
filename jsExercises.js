 // Užduotis:
// sukurkite 2 kintamuosius pavadinimais “myName” ir “myLastname”
// jie turi talpinti savyje jūsų vardą ir pavardę
// naudodamies šiaisi kintamaisiais į konsolę išspausdinkite, pasisveikinimą: “Hi Jonas Jonaitis”.


/* let myName="Dalius";
let myLastname="Kriauciunas";

console.log(`Hi ${myName}  ${myLastname}`) */


// Uždavinukas:
// Turime stringą “Mano vardas {X}, aš esu profesionalus {atletas/-ė} !”. Sukurkite algoritmą, kuris išluptų vardą ir profesiją iš tokio stringo. Algoritmas, turi veikti su bet kokio ilgio string’ais bei naudoti tik indexOf, lastIndexOf is slice metodus.

/* let string = "Mano vardas {Dalius}, aš esu profesionalus {atletas} !";

let vardasString = string.slice(string.indexOf('{') + 1, string.indexOf('}'));
let profString = string.slice(string.lastIndexOf('{') + 1, string.lastIndexOf('}'));

console.log(`${vardasString} - ${profString}`) */





