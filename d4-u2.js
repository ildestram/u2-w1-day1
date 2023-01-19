/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietÃ  "skills".
*/
const me = {
    name: 'Joh',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
delete me.skills;
console.log(me);

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */
const numbers = [1,23,34,44,56,68,73,81,90,100];
const odds = numbers.filter((num) => num % 2 === 1);
console.log(odds);

/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
const arrayLength = 100;
const randomNumber = [];
for(let i = 0; i < arrayLength; i++){
    randomNumber.push(Math.random());
};
console.log(randomNumber);

/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */
const numer = [1,5,10,15,20,25,30,35,40,45,50,55,60,65,70];
const evens = numer.filter((num) => num % 2 === 0);
console.log(evens);

/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */