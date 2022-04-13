# JavaScript_Exercises

Execises from the slides while I was studying JavaScript

###

Exercises list:
#1 Užduotis:
// sukurkite 2 kintamuosius pavadinimais “myName” ir “myLastname”
// jie turi talpinti savyje jūsų vardą ir pavardę
// naudodamies šiaisi kintamaisiais į konsolę išspausdinkite, pasisveikinimą: “Hi Jonas Jonaitis”.

//#2 Uždavinukas:
// Turime stringą “Mano vardas {X}, aš esu profesionalus {atletas/-ė} !”. Sukurkite algoritmą, kuris išluptų vardą ir profesiją iš tokio stringo. Algoritmas, turi veikti su bet kokio ilgio string’ais bei naudoti tik indexOf, lastIndexOf is slice metodus.

// #3 → Programoje yra galimi 2 variantai kaip įvykiai susiklostys. Vienas ir kitas yra vienodai tikėtini. Parašykite kodą, kuris išspausdina “Įvykis 1” arba “Įvykis 2” su 50% tikimybe.
// → Programoje yra galimi 4 variantai kaip įvykiai susiklostys.
//  Kad įvyks 4-tas tikimybė 75%. Visi kiti dalinasi likusius 25% tikimybės (kiekvienas iš likusių trijų turi vienodą tikimybę 25 / 3). 
//   Parašykite kodą, kuris išspausdina atspindi šių įvykių tikimybes.



#4 // Exercise: sukurkite vartotojo prieėjimo prie svetainės vedlį (naudojant prompt() ir alert()).
//  Vedlys vieną po kito užduos klausimus: koks jūsų vardas, kiek jums metų. Jei vartotojas įveda 
//  netaisyklingą inputą jam reiktų pranešti, jog praėjęs įvedimas buvo neteisingas prieš klausiant
//   dar kartą (daryti su alert() bei prompt() f-jom). Vedlys turi pasveikinti vartotoją jeigu jam 
//   leidžiama prisijungti arba paapgailestauti jei ne.

// #5 Užduotis: 
// 1)patikinkite ar mūsų programos, kurios naudojasi atsitiktiniais skaičiais yra “fair”.
//  “A Fair coin” yra apibrėžiama kaip moneta, kurios metimų skaičiui artėjant prie begalybės,
// atvejų kai iškrenta “H” ir “S” artėja prie 50/50. Sukaupkime rezultatus masyve ir suskaičiuokime,
// koks buvo vieno ir kito rezultato santykis (prisiminkite alternatyvą su counteriais, bet nenaudokite).
// 2)Turime masyvą vardų - atspausdinti vardus atbuline tvarka (ne kiekvienas vardas turi būti atbulai,
//  bet visa aibė A, B, C → C, B, A). Pasunkinimas: turite nesukurti naujo masyvo.
// 3)Turime masyvą vardų - parašykite algoritmą, kuris pasakytų ar yra konkretus vardas tame masyve. 
// Turite nesukurti naujo masyvo. Turite atspausdinti “Taip”/”Ne”. (search)
// 4)Turime masyvą vardų - iš to masyvo sukonstruokite kitą masyvą, kuriame yra vardai, ilgesni nei 6 
// simbiliai. Programoje turi būti max 2 masyvai. Gale programos naują masyvą atspausdinkite. (filter)

// #6 Užduotys: 
// Dešinėje yra kodas, kuris išvardina visus 2D masyvo narius. Nusikopijuokite jį ir modifikuokite pavyzdį
//  taip, jog būtų suskaičiuota kiek išviso iteracijų buvo padaryta. Paprastas sprendimas tiesiog arr.length
//   išspausdinti netinka, taip pat netinka arr.length + arr[0].length + … + arr[n].length. 
// Išspausdinkime konkretų kiekvieno vidinio masyvo narį, tarkim 2-ąjį (pasirinktinai) kiekvieno vidinio masyvo narį.
var arr = [
    [1,6,3,7],
    [9,6,9,3],
    [5,6,9]
]

// Išvardinkime visus narius - nested for loop
for(var i = 0; i < arr.length; i++){
    // console.log(arr[i]); // arr[i] - masyvas, tai reikia dar vieno ciklo
    for(var j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    }
}
// #7 Uždavinys: apačioje yra objektų masyvas personel:
// Pridėkime į kiekvieno objekto vidų kitą objektą, kuris talpins informaciją apie departamentą, pastarasis turės max 2 savybes.
// Suformuokite masyvą žmonių, kurie dirba kuriame nors departamente (tarkim visi marketing departameto žmonės) - filtering.
var personel = [
    {
        id: 51,
        name: "Joana",
        baseSalary: 450,
        bonus: true,
        gender: "female"
    },
    {
        id: 2,
        name: "Jonas",
        baseSalary: 600,
        bonus: false,
        gender: "male"
    },
    {
        id: 432,
        name: "Marta",
        baseSalary: 1005,
        bonus: true,
        gender: "female"
    }
 ];

//#8 Uždavinys:
// ** Sugrupuokite visą personalą į grupes pagal departamentą! Palengvinimas: pagal lytį (kur kiekis yra žinomas ir fiksuotas).
// Pirmiausia, negalime daryti prielaidos, jog žinome, kiek yra departamentų. Taigi turime juos suskaičiuoti. Tai pasakys grupių kiekį / pavadinimus.
// Tada galime perpanaudoti departments masyvą ir į kiekvieną jame esantį department objektą sudėti lauką: personel: []
// Arba galime pasidaryti atskirą objektą, kuriame laikysime departamento vardą ir masyvą su darbuotojais. Gautą JSON’ą patikrinkite su įrankiu: 

