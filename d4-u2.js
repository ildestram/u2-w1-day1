/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietÃ  "skills".
*/
const me = {
    name: 'Joh',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
// delete me.skills (lo potevo fare);
me.skills.pop();
console.log(me);

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */
// Primo modo
const numbers = [1,23,34,44,56,68,73,81,90,100];
const odds = numbers.filter((num) => num % 2 === 1);
console.log(odds);

// Secondo modo
let disp = [];
for(let i =0; i<=100; i++){
  if(i % 2 !== 0){
    disp.push(i);
    // console.log(disp.push(i));
  };
};
// console.log(disp);
console.log(disp);


/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
// Primo modo
const arrayLength = 100;
const randomNumber = [];
for(let i = 1; i < arrayLength; i++){
    randomNumber.push(Math.random());
};
console.log(randomNumber);

// Secondo modo
let arr = [];
for(let i = 0; i < 10; i++){
  arr[i] = Math.random() * (100 - 0) + 0;
};
console.log(arr);



/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */
// Primo modo
const numer = [1,5,10,15,20,25,30,35,40,45,50,55,60,65,70];
const evens = numer.filter((num) => num % 2 === 0);
console.log(evens);

// Secondo modo
let pari = [1,2,3,4,5,6,7,8,10];
for(let i = 0; i <= pari.length; i++){
  if(pari[i] % 2 === 0){
    console.log(pari[i]);
  };
};


/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */
// Primo modo
function sumUp(array){
  const myArray = [1,5,9,12,15];
  let sum = 0;

  for(let i = 0; i < myArray.length; i+=1){
    sum += myArray[i];
  };

  return sum;
};
console.log(sumUp([1,5,9,12,15]));

// Secondo modo
let arrays = [1,2,3,4,5,6,7,8,9,10];
let sums = 0;

for(let i = 0; i < arrays.length; i++){
  sums += arrays[i];
  // console.log(sums);
};
console.log(sums);

/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/
// Primo modo
const increment = [5,10,15];
const newIncrement = increment.map(num => num + 1);
console.log(newIncrement);

// Secondo modo
let omar = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < omar.length; i++){
  omar[i]++;
};
console.log(omar);


// ESERCIZIO 7
// Scrivi del codice per eliminare solo i valori PARI da un array;
// let myHarry = [1,2,3,4,5,6,7,8,9,10];
function arDispari(){
  let myHarry = [1,2,3,4,5,6,7,8,9,10];
  for(let i = 0; i < myHarry.length; i++){
    // let myHarry = [1,2,3,4,5,6,7,8,9,10];
    if(myHarry[i] % 2 !== 0){
      // myHarry.pop();
      // myHarry.slice(myHarry[i], myHarry[i]);
      // myHarry.pop();
      delete myHarry[i];
    };
    return myHarry.join("");
  };
  // console.log(arDispari);
};
console.log(arDispari());
// console.log(arDispari());
// console.log(arDispari);
// let myHarry = [1,2,3,4,5,6,7,8,9,10];

// myHarry = myHarry.filter(e => e % 2 === 1);
// console.log(myHarry);
// for(let i = 0; i < myHarry.length; i++){
//   if(myHarry[i] % 2 === 0){
//     // myHarry.pop();
//     myHarry.slice(myHarry[i], myHarry[i]);
//   };
// };
// console.log(myHarry);


/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */
// Primo modo
let randomNumeri = [];
for(let j = 0; j < 10; j++){
  let randomNum = Math.round(Math.random() * 10);
  if(!randomNumeri.includes(randomNum)){
    randomNumeri.push(randomNum);
  };
};
console.log(randomNumeri);


// Secondo modo
let randomLulu = [];
for(let i = 0; i < 10; i++){
  randomLulu[i] = Math.random() * (10) + 1;
};
console.log(randomLulu);


/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
let epicode = ["EPICODE", "is", "great"];
for(let i = 0; i < epicode.length; i++){
  let stringaEpicode = epicode[i];
  epicode[i] = stringaEpicode.length;
};
console.log(epicode);


/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/
const normalArray = [1,3,5];
const reverseArray = normalArray.reverse();
console.log(reverseArray);


/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/
// Primo modo
const higherNumber = [458,738,648,82739,28173982,828103];
console.log(Math.max(...higherNumber));

// Secondo modo
let highesNumber = [458,738,648,82739,28173982,828103];
let maximum = highesNumber.reduce(function(a,b){
  return Math.max(a,b);
});
console.log(maximum);




/* Questo array di film verrÃ  usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film piÃ¹ vecchio nell'array fornito.
*/
// ho utilizzato il metodo find()
let obj = movies.find(o => o.Year < 1970);
console.log(obj);


/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/
let movieLength = movies.length;
console.log(movieLength);


/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
// Primo modo
let titleMovies = movies.filter(el => el.Title);
console.log(titleMovies);

// Secondo modo
let movieTitles = [];
for(let i = 0; i < movies.length; i++){
  movieTitles.push(movies[i].Title);
};
console.log(movieTitles);


/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
// for(let i = 0; i <= movies.length; i++){
//   let currentMill = movies.find(ob => ob.Year < 2020);
//   console.log(currentMill);
// };
// console.log(JSON.stringify(movies[0].Title));
// console.log(movies[0].Title);
movies.forEach(function(el){
  let millYear = movies.find(ob => ob.Year >= 2000);
  if(movies.Year >= 2000){
    console.log(movies.Year);
  };
});

let movieYears = [];
for(let i = 0; i < movies.length; i++){
  if(movies[i].Year > 2000){
    movieYears.push(movies[i].Year);
  };
};
console.log(movieYears);


/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
const id = 'tt0355702'
// movies.findIndex(x => x.id === 'tt0355702');
// let check = movies.find(x => x.id === 'tt0355702');
// console.log(check);
// const objs = movies.find(ob => ob.id === 'tt0355702');
// let results = movies.find(val => val.id === 'tt0355702');
// console.log(results);
// let movieId = movies.find(movieId => movieId.id = 'tt0355702');
// console.log(movieId);
// oddio mi ha trovato un altro id

let findId = [];
for(let i = 0; i < movies.length; i++){
  if(movies[i].imdbID === 'tt0355702' ){
    // findId.push(movies[i].imdbID === 'tt0355702');
    movies.find(val => val.id === 'tt0355702');
    findId.push(movies[i].imdbID === 'tt0355702');
  };
};
console.log(findId);

// function returnId(){
//   let idFilm = movies.findIndex(o => o.imdbID == 'tt0355702');
//   return movies[];
// }
// E' QUESTO IL MODO
let idFilm = movies[movies.findIndex(o => o.imdbID === 'tt0355702' )];
// let idFilm = movies.findIndex(o => o.imdbID == 'tt0355702');
console.log(idFilm);

/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

// in questo modo mi fa vedere tutti gli anni uno dopo l'altro
let allYears = [];
for(let i = 0; i < movies.length; i++){
  let nume = parseFloat(movies[i].Year);
  allYears += nume;
};
console.log(allYears);

// secondo modo -> chiedere come funziona il forEach
// let summup = movies[i].Year;
let summi;

for(let i = 0; i < movies.length; i++){
  let sommar; 
  // sommar = sommar + parseInt(movies[i].Year);
  // sommar = parseInt(sommar + movies[i].Year);
  // summi += parseInt(summi + movies[i].Year);
  sommar = parseInt(sommar + parseInt(movies[i].Year));
  summi = sommar;
};
console.log(summi);

// let getWatt = movies.reduce((getWatt, movies) => {
//   return getWatt + movies.Year;
// }, 0);
// console.log(getWatt);

// const sumOfAges = movies.reduce((sum, movies) => sum + movies.Year, 0);
// console.log(sumOfAges);

const sumYear = movies.reduce((total, valoreCorrente) => total += parseInt(movies.Year));


/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
let specificValue = "Lord of the Flies";
let valueSpec = []
for(let i = 0; i < movies.length; i++){
  // let valueSpec = []
  if(movies[i].Title.includes(specificValue)){
    valueSpec.push(movies[i] === "Lord of the Flies");
  };
};
console.log(valueSpec);
