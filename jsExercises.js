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

/* const varduMasyvas = ["Jonas", "Klaudas", "Frenkis", "Dziuze", "Kleopatra", "Pranas"];
const newVarduMasyvas = varduMasyvas.filter(sixLetter => sixLetter.length > 6);
console.log(newVarduMasyvas)
  */

// #6 Užduotys: 
// Dešinėje yra kodas, kuris išvardina visus 2D masyvo narius. Nusikopijuokite jį ir modifikuokite pavyzdį
//  taip, jog būtų suskaičiuota kiek išviso iteracijų buvo padaryta. Paprastas sprendimas tiesiog arr.length
//   išspausdinti netinka, taip pat netinka arr.length + arr[0].length + … + arr[n].length. 
// Išspausdinkime konkretų kiekvieno vidinio masyvo narį, tarkim 2-ąjį (pasirinktinai) kiekvieno vidinio masyvo narį.
/* var arr = [
    [1,6,3,7],
    [9,6,9,3],
    [5,6,9]
]
let count=null
// Išvardinkime visus narius - nested for loop
for(var i = 0; i < arr.length; i++){
    console.log("spauzdinamas 2-as vidinio masyvo narys: " +arr[i][1])
    // console.log(arr[i]); // arr[i] - masyvas, tai reikia dar vieno ciklo
    for(var j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
        count++//iteraciju skaiciavimas
    }
}
console.log("isviso: ",count)//iteracijos
 */

// #7 Uždavinys: apačioje yra objektų masyvas personel:
// 1)Pridėkime į kiekvieno objekto vidų kitą objektą, kuris talpins informaciją apie departamentą, pastarasis turės max 2 savybes.
// 2)Suformuokite masyvą žmonių, kurie dirba kuriame nors departamente (tarkim visi marketing departameto žmonės) - filtering.
/* var personel = [
    {
        id: 1,
        name: "Joana",
        baseSalary: 450,
        bonus: true,
        gender: "female"
    },
    {
        id: 8,
        name: "Jonas",
        baseSalary: 600,
        bonus: false,
        gender: "male"
    },
    {
        id: 144,
        name: "Marta",
        baseSalary: 955,
        bonus: true,
        gender: "female"
    },
    {
        id: 84,
        name: "Martin",
        baseSalary: 1205,
        bonus: true,
        gender: "female"
    }
 ];

//1) pridedame prie kiekvieno objekto masyve nauja objekta - informacija apie departamenta.
personel.push({id: 455, name: "Cloude", baseSallary: 10000, gender: "mele"}) // pridetas pirminiame objekto masyve papildomas naujas objektas

for(i=0;i<personel.length;i++){
    (personel[i].id <=10)?personel[i].department = {depName: "Development HQ" ,rank: "Developer"}
    :(personel[i].id <100) && (personel[i].id >10)?personel[i].department = {depName: "Development HQ" ,rank: "QA"}
    :(personel[i].id <200) && (personel[i].id >=100)?personel[i].department = {depName: "Marketing" ,rank: "Seller"}
    :personel[i].department = {depName: "Manegament" ,rank: "CEO"}

}

//2) filtravimas, isrenkant pagal konkretu pasirinkta kriteriju, pvz pagal  departamento Development HQ dirbanciuosius

let filteredPersonel=[]

for(i=0;i<personel.length;i++){
if(personel[i].department.depName == "Development HQ"){

filteredPersonel.push(personel[i])
}
}

console.log(personel)
console.log(filteredPersonel) */

 

//#8 Uždavinys:
// ** Sugrupuokite visą personalą į grupes pagal departamentą! Palengvinimas: pagal lytį (kur kiekis yra žinomas ir fiksuotas).
// Pirmiausia, negalime daryti prielaidos, jog žinome, kiek yra departamentų. Taigi turime juos suskaičiuoti. Tai pasakys grupių kiekį / pavadinimus.
// Tada galime perpanaudoti departments masyvą ir į kiekvieną jame esantį department objektą sudėti lauką: personel: []
// Arba galime pasidaryti atskirą objektą, kuriame laikysime departamento vardą ir masyvą su darbuotojais. Gautą JSON’ą patikrinkite su įrankiu: 
 
/* 
 let personel = [
    {
        id: 1,
        department: { id: 3, department_name: "Marketing" },
        name: "Joana",
        baseSalary: 510,
        bonus: true,
        gender: "female"
    },
    {
        id: 8,
        department: { id: 2, department_name: "IT" },
        name: "Jonas",
        baseSalary: 600,
        bonus: false,
        gender: "male"
    },
    {
        id: 144,
        department: { id: 2, department_name: "IT" },
        name: "Marta",
        baseSalary: 955,
        bonus: true,
        gender: "female"
    },
    {
        id: 84,
        department: { id: 1, department_name: "Management" },
        name: "Martin",
        baseSalary: 1205,
        bonus: true,
        gender: "female"
    },
    {
        id: 0,
        department: { id: 2, department_name: "IT" },
        name: "Cloudia",
        baseSalary: 550,
        bonus: true,
        gender: "female",
    },
    {
        id: 2,
        department: { id: 3, department_name: "Marketing" },
        name: "Boris",
        baseSalary: 650,
        bonus: false,
        gender: "male",
    }
 ];
 let departaments = [];

 for(i=0;i<personel.length; i++){
    let alreadyInList = false;
    for(j=0;j<departaments.length;j++){
       console.log("PerDep: " + personel[i].department + ", Dep: " + departaments[j]);
       if(personel[i].department.department_name === departaments[j].department_name){
           alreadyInList = true
       }
   }
    if(alreadyInList === false ){
       departaments.push(personel[i].department);
       }
       console.log(alreadyInList)
 }
 console.log(departaments)
 for(i=0; i < departaments.length; i++){
     departaments[i].personel = [];
 for(j=0;j<personel.length;j++){
     if(departaments[i].department_name===personel[j].department.department_name){
         departaments[i].personel.push(personel[j])        
     }
    }
 } */

//#9 Uždavinys:
// Turime masyvą su mokinių informacija, kiekvienas objektas: name ir grades []. Suformuokite naują mokinių masyvą kur kiekvienas objektas turės informaciją: name ir avgGrade.
// ** Panaudokite pasunkintą užduoties formą ir suskaičiuokite kiekvieno besimokomo dalyko vidurkį (jei norite: medianą, modą ir standartinį nuoktrypį):

/* let students = [
    { name: "Mindaugas", subject_grades: [ 
        { subject_name: "Lietuvių", grades: [10, 7, 8] },
        { subject_name: "Matematika", grades: [10, 7, 8] },
    ]},
    { name: "Jonas", subject_grades: [ 
        { subject_name: "Lietuvių", grades: [5, 7, 8] },
        { subject_name: "Matematika", grades: [8, 7, 8] },
    ]},
];

let vidurkis = [];
let mokiniuPazymiuSuma = null
let count =null
for(i=0;i<students.length;i++){

    
    for(j=0;j<students[i].subject_grades.length; j++){
        let subjectPazymiuSuma=null;
        let subjectVidurkis=null;
        let mediana = [];
        let moda = null;
        
        for(k=0;k<students[i].subject_grades[j].grades.length;k++){
            count ++
            
            subjectPazymiuSuma+=students[i].subject_grades[j].grades[k];
            subjectVidurkis=(subjectPazymiuSuma/(k+1)) 
            mediana.push(students[i].subject_grades[j].grades[k])
            mediana.sort(function(a,b){
                return a-b
            })
            // console.log(mediana)
            // console.log(subjectPazymiuSuma);
            // console.log(subjectVidurkis);
        }
        mediana= mediana[Math.round((mediana.length/2)-1)]
        // console.log(mediana)
        mokiniuPazymiuSuma+=subjectPazymiuSuma;

        vidurkis.push({"name" : students[i].name, "subject" : students[i].subject_grades[j].subject_name, "sumOfGrade" : subjectPazymiuSuma, "vidurkis" :subjectVidurkis, "mediana" : mediana  });
    }
}
console.log(`visu mokiniu pazymiu vidurkis ${mokiniuPazymiuSuma/count}`)
console.log(vidurkis);  */