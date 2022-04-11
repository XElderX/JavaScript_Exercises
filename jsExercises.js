 //#1 Užduotis:
// sukurkite 2 kintamuosius pavadinimais “myName” ir “myLastname”
// jie turi talpinti savyje jūsų vardą ir pavardę
// naudodamies šiaisi kintamaisiais į konsolę išspausdinkite, pasisveikinimą: “Hi Jonas Jonaitis”.


/* let myName="Dalius";
let myLastname="Kriauciunas";

console.log(`Hi ${myName}  ${myLastname}`) */


//#2 Uždavinukas:
// Turime stringą “Mano vardas {X}, aš esu profesionalus {atletas/-ė} !”. Sukurkite algoritmą, kuris išluptų vardą ir profesiją iš tokio stringo. Algoritmas, turi veikti su bet kokio ilgio string’ais bei naudoti tik indexOf, lastIndexOf is slice metodus.

/* let string = "Mano vardas {Dalius}, aš esu profesionalus {atletas} !";

let vardasString = string.slice(string.indexOf('{') + 1, string.indexOf('}'));
let profString = string.slice(string.lastIndexOf('{') + 1, string.lastIndexOf('}'));

console.log(`${vardasString} - ${profString}`) */

// #3 → Programoje yra galimi 2 variantai kaip įvykiai susiklostys. Vienas ir kitas yra vienodai tikėtini. Parašykite kodą, kuris išspausdina “Įvykis 1” arba “Įvykis 2” su 50% tikimybe.
// → Programoje yra galimi 4 variantai kaip įvykiai susiklostys.
//  Kad įvyks 4-tas tikimybė 75%. Visi kiti dalinasi likusius 25% tikimybės (kiekvienas iš likusių trijų turi vienodą tikimybę 25 / 3). 
//   Parašykite kodą, kuris išspausdina atspindi šių įvykių tikimybes.

/* let random = Math.floor(Math.random() * 10);
random<5 ? random = "1st event" : random = "2nd Event"
console.log(random) */

 
/* let random2 = Math.floor(Math.random()*100);

if(random2 >=0 && random2 < (25/3) * 1) {
    console.log("Event A");
}
else if(random2>=(25/3) * 1 && random2 < (25/3) * 2){
    console.log("Event B");
}
else if(random2>=(25/3) * 2 && random2 < (25/3) * 3){
    console.log("Event C");
}
else {
    console.log("Event D")
} */


// Exercise: sukurkite vartotojo prieėjimo prie svetainės vedlį (naudojant prompt() ir alert()).
//  Vedlys vieną po kito užduos klausimus: koks jūsų vardas, kiek jums metų. Jei vartotojas įveda 
//  netaisyklingą inputą jam reiktų pranešti, jog praėjęs įvedimas buvo neteisingas prieš klausiant
//   dar kartą (daryti su alert() bei prompt() f-jom). Vedlys turi pasveikinti vartotoją jeigu jam 
//   leidžiama prisijungti arba paapgailestauti jei ne.

