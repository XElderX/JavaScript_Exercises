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


// #4 Exercise: sukurkite vartotojo prieėjimo prie svetainės vedlį (naudojant prompt() ir alert()).
//  Vedlys vieną po kito užduos klausimus: koks jūsų vardas, kiek jums metų. Jei vartotojas įveda 
//  netaisyklingą inputą jam reiktų pranešti, jog praėjęs įvedimas buvo neteisingas prieš klausiant
//   dar kartą (daryti su alert() bei prompt() f-jom). Vedlys turi pasveikinti vartotoją jeigu jam 
//   leidžiama prisijungti arba paapgailestauti jei ne.

/* let vardas = prompt("Koks jusu vardas?");
typeof vardas !=='string' ? alert("tai ne vardas")
: vardas.length <3 ? alert("jusu vardas per trumpas")
: true, console.log(`Sveiki, ${vardas}`) 
let amzius = prompt("Kiek jums metu?");
if (amzius <=0){
    alert("jus galbut dar net negimes?")
}
else if(amzius<18){
    alert("sorry, bet tu neturi 18")
}
else{
    true, console.log("Jus esate suauges, todel ok")

}
alert(`Sveiki atvyke ${vardas}, kadangi jums ${amzius} metu, jus esate laukiamas pas mus`)

 */

// #5 Užduotis: 

// 1)patikinkite ar mūsų programos, kurios naudojasi atsitiktiniais skaičiais yra “fair”.
//  “A Fair coin” yra apibrėžiama kaip moneta, kurios metimų skaičiui artėjant prie begalybės,
// atvejų kai iškrenta “H” ir “S” artėja prie 50/50. Sukaupkime rezultatus masyve ir suskaičiuokime,
// koks buvo vieno ir kito rezultato santykis (prisiminkite alternatyvą su counteriais, bet nenaudokite).

/* 
let coin;
let countFair = null;
let countUnFair = null;
const coinArray= []

for(i=0;i<100;i++){
    coin=Math.floor(Math.random() * 2);
    coin<1 ? (coin = "fair coin", countFair++) : (coin = "unfair coin", countUnFair++)
    console.log(`${i+1} bandymu iskrito: ${coin}`)
    coinArray.push(coin);
}
let ratio =  (countFair > countUnFair) ? "Fair coin iskrito " + countFair/countUnFair +" karto dazniau" 
:(countFair < countUnFair) ? "UnFair coin iskrito " +countUnFair/countFair +" karto dazniau" 
: 1/1

///patikrinimas kiek kartu iskrito
console.log(`Fair coin iskrito ${countFair} kartu`)
console.log(`Unfair coin iskrito ${countUnFair} kartu`)
console.log(coinArray) // Visos reiksmes masyve
console.log(`Santykis: ${ratio}`) */

// 2)Turime masyvą vardų - atspausdinti vardus atbuline tvarka (ne kiekvienas vardas turi būti atbulai,
//  bet visa aibė A, B, C → C, B, A). Pasunkinimas: turite nesukurti naujo masyvo.
/* let varduMasyvas = ["Jonas", "Klaudas", "Frenkis", "Dziuze", "Kleopatra", "Pranas"];

for(i=varduMasyvas.length-1; i>=0; i--){
    console.log(varduMasyvas[i]);
} */


// 3)Turime masyvą vardų - parašykite algoritmą, kuris pasakytų ar yra konkretus vardas tame masyve. 
// Turite nesukurti naujo masyvo. Turite atspausdinti “Taip”/”Ne”. (search)

/* let varduMasyvas = ["Jonas", "Klaudas", "Frenkis", "Dziuze", "Kleopatra", "Pranas"];
(varduMasyvas.includes('Kleopatra') === true) ? console.log("taip") : console.log("Ne") */



// 4)Turime masyvą vardų - iš to masyvo sukonstruokite kitą masyvą, kuriame yra vardai, ilgesni nei 6 
// simbiliai. Programoje turi būti max 2 masyvai. Gale programos naują masyvą atspausdinkite. (filter)

const varduMasyvas = ["Jonas", "Klaudas", "Frenkis", "Dziuze", "Kleopatra", "Pranas"];
const newVarduMasyvas = varduMasyvas.filter(sixLetter => sixLetter.length > 6);
console.log(newVarduMasyvas)
