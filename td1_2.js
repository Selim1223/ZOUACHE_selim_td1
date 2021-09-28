//2.1

let var1;
let var2 = 'blabla';
let var3 = "blabla";
let var4 = 'blabla {$x}';
let var5 = 9;
let var6 = 2.5;
let var7 = true;
let var8 = undefined;
let var9 = null;
let var10 = [1,2,3];
let var11 = new Array();
let var12 = {};
let var13 = {"promo":"lpwmce", "nb":25};
let var14 = new Date();
let var15 = function() {alert('toto')};
let var16 = 42n;


function determine(x) {
    return typeof(x);
}


console.log(determine(var2));
console.log(determine(var3));
console.log(determine(var4));
console.log(determine(var5));
console.log(determine(var6));
console.log(determine(var7));
console.log(determine(var8));
console.log(determine(var9));
console.log(determine(var10));
console.log(determine(var11));
console.log(determine(var12));
console.log(determine(var13));
console.log(determine(var14));
console.log(determine(var15));
console.log(determine(var16));

//2.2

 //console.log(determine(x));
 //let x ="toto";
 //Uncaught ReferenceError: can't access lexical declaration 'x' before initialization

 //2.3

console.log(var5.toString());
console.log(var6.toString());
console.log(parseFloat(var5));
console.log(Math.floor(var6));
console.log(Math.round(var6));
console.log(Math.ceil(var6));
console.log(parseInt(var4));
console.log(parseFloat(var7));

//2.4 

let b = false;
let n = 0;
let s ='0';
let tab = [];
let o = {};

console.log(n == s);
console.log(n === s);
console.log(tab == o);
console.log(tab === o);

//3
//affiche une chaine en majuscule 
function MajCarac(){
   chaine =prompt("veuillez saisir un mot :");
   while(chaine !== chaine.toUpperCase()){
     chaine = prompt("le mot saisit doit etre en majuscule :");              
   }
  return chaine.toLocaleUpperCase();        
}

console.log(MajCarac());

//affiche 5 caractères aléatoires

function randomCarac() {
  let result = '';
  nbIteration = 0;
  MajCharacters = false;
    while (!MajCharacters) {   
        for (let i = 0; i < 5; i++) {
          let randomNumber;
          do {
            randomNumber = 65 + Math.random() * (123 - 65)
          } 
          while (randomNumber > 90 && randomNumber < 97){
            result += String.fromCharCode(randomNumber);
          }          
        }
        console.log(result);
        if (result === result.toUpperCase()) {
          MajCharacters = true
        }
        result = '';
        nbIteration++;    
  }
  return(nbIteration);
}
console.log(randomCarac());

// fonction qui génère une chaîne ne contenant que des voyelles

function vowelsStr() {
  vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let str = '';
  for (let i = 0; i < vowels.length; i++) {
    str += vowels[Math.floor(Math.random() * 4)];
  }
  return(str);
}

console.log(vowelsStr());

//renvoie la chaine cryptée

function encryptedStr() {

  let str = prompt('saisir un mot (majuscule ou minuscule) :');
  let newStr = str;
  newStr = newStr.replace(/A/gi, '4');
  newStr = newStr.replace(/E/gi, '3');
  newStr = newStr.replace(/G/gi, '6');
  newStr = newStr.replace(/I/gi, '1');
  newStr = newStr.replace(/O/gi, '0');
  newStr = newStr.replace(/S/gi, '5');
  newStr = newStr.replace(/Z/gi, '2');

  return(newStr);
}
console.log(encryptedStr());


//affiche le nom en majuscule et le prénom avec initiale en majuscules
function ucwords (str) {
  return (str + '').replace(/^([a-z])|\s+([a-z])/g,
   function ($1) {
      return $1.toUpperCase();
  });
}

function NameAndLastname(){
  let name = prompt ("veuillez saisir un nom");
  let lastname = prompt("veuillez saisir un prénom");
  return name.toUpperCase()+" "+ucwords(lastname);
}
console.log(NameAndLastname());

//programme jazz bundle 

function JazzBundle (){
  let n = prompt("veuillez saisir un nombre :");
  let i;
    for (i=1; i<=n; i++)
    {
        if (i%15 == 0)   
            return("JazzBundle" + " ");
         
        else if ((i%3) == 0)
            console.log("Jazz" + " ");               
         
        else if ((i%5) == 0)                   
            console.log("Bundle" + " ");               
     
        else       
            console.log(i + " ");               
    }
}
console.log(JazzBundle());

//4 
//addition des entiers dans un tableau
function arraySum(){
  const array = [1, 2, 3, 4];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
      sum += array[i];
  }
  return(sum);
}

console.log(arraySum());

//compte le nombre d'entiers pairs dans un tableau

function EvenNumbers(){
  let tab = [4,5,7,8,14,45,76,158,653,1476,8888];
  let the_evens = tab.filter(number => number % 2 == 0);
  let the_evens_numbers = the_evens.length;  
  return the_evens_numbers;
}
  
console.log(EvenNumbers());

//fusion de deux tableaux triés, et renvoie d'un tableau trié

function sortedArray() {

  let tab1 = [1, 482, 7, 15, 3, 1426];
  let tab2 = [72, 234, 300, 11, 454, 98647];
  let tab3 = tab1.concat(tab2);
  console.log(tab3);
  isSorted = false;

  while (!isSorted) {
      isSorted = true;
      let i;
      for (i = 0; i < tab3.length - 1; i++) {
          if (tab3[i] > tab3[i + 1]) {
              let temp = tab3[i];
              tab3[i] = tab3[i + 1];
              tab3[i + 1] = temp;
              isSorted = false;
          }
      }
  }
}
console.log(sortedArray());

//recherche dichotomique dans un tableau

/* algo
  
VARIABLE
t : tableau d'entiers trié
mil : nombre entier
fin : nombre entier
deb : nombre entier
x : nombre entier // x : l'entier recherché
tr : booléen
DEBUT
tr ← FAUX
deb ← 1
fin ← longueur(t)
tant que tr == FAUX et que deb ⩽ fin :
 mil ← partie_entière((deb+fin)/2)
 si t[mil] == x :
  tr = vrai
 sinon :
  si x > t[mil] :
   deb ← mil+1
  sinon :
   fin ← mil-1
  fin si
 fin si
fin tant que
renvoyer la valeur de tr
FIN
*/

// renvoie le plus grand pair

function biggestEven(...numbers) {
  let biggest_even = -1;
  numbers.forEach((num) => {
      if (num % 2 == 0 && biggest_even < num) {
        biggest_even = num;
      }
  })
  return biggest_even;
}
console.log(biggestEven(8,46,1220,38,114,86));

//renvoie le nombre d'occurences de chaque mot d'une phrase
 
function occurences(){
  let texte = 'Salut tout le monde, c\'est un texte pour tester le code... Salut tout le monde, c\'est un texte pour tester le code...';
  let text=texte.split(' ');
  let k=0;
  function getWord(word){
      k=0;
      for(let j=0;j<text.length;j++){
      if(word==text[j])
      k++;
      }
    return k;
    }
    for (let word of text) { 
      console.log(word +': est repeté '+ getWord(word) + ' fois \n');
    } 
}

console.log(occurences());






