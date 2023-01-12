/* ESERCIZIO 1 + ESERCIZIO 2
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 Risposta: i data types (tipi di dati) vengono utilizzati per classificare determinate tipologie di dato. In Javascript i tipi di dati sono cinque: numeri, stringhe, booleani, null e undefined, oggetti (tipo di dato complesso).
 Stringa = sequenza di caratteri che devono essere inseriti tra doppi o singoli apici.
 let nome = "Ilde" -> "Ilde" è una stringa

 Numeri = javascript ha un solo tipo di dato numerico, non c'è distinzione tra decimale e intero.
 let numero = 24 -> 24 è un numero

 Boolean = il tipo di dato booleano presenta solo due valori: true (vero) e false (falso)

 Null = la variabile è stata inizializzata e alla stessa è stesso assegnato il valore null --> let invalido = null (console.log(invalido)) = in console vedremo scritto il risultato null. In questo caso alla variabile non è stato assegnato deliberatamente un valore, 
 mentre undefined indica una variabile non inizializzata, cioè a cui non è stato ANCORA assegnato un valore let valore. (console.log(valore)) = in console vedremo scritto il risultato undefined

 Oggetto = contenitore di valori eterogenei che messi insieme formano una struttura dati unica.
 let donna = {
    name: "Ilde",
    surname: "Stramandinoli", 
    age: 24,
 };
*/

// valori booleani
let z = 10 > 9;
console.log(z);
// in console mi viene true (perchè effettivamente 10 è maggiore di 9)
let y = 14 < 1;
console.log(y);
// in console mi viene false


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let somma = 12 + 20;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Ilde";
console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let substract = x - 4;
console.log(substract);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: Ã¨ la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
let name1 = "john";
let name2 = "John";
// === strettamente uguale
console.log(name1 === name2);
// != diverso
console.log(name1 != name2);

console.log(name1.toLowerCase() === name2.toLowerCase());