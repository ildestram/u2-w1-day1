/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
function bigNumber(num1,num2){
    if(num1 > num2){
        console.log(`${num1} è maggiore di ${num2}`);
    } else{
        console.log(`${num1} è minore di ${num2}`);
    };
};

bigNumber (8,10);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
function notEqual(numero){
    if(numero != 5){
        console.log(`${numero} not equal`);
    } else {
        console.log("is equal");
    };
};
notEqual(9);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
function divisible(nummer){
    if(nummer % 5 === 0){
        console.log(`${nummer} divisible by 5`);
    } else {
        console.log(`${nummer} not divisible by 5`);
    };
};
divisible(10);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
function numberOrPlus(numm1,numm2){
    if(numm1 === 8){
        console.log("true");
    } else{
        let somma = numm1 + numm2 || numm1 - numm2;
        console.log(somma);
    };
};
numberOrPlus(12,5);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
function checkOut(totalCart){
    let speditionCost;
    if(totalCart > 50){
        console.log(speditionCost = 0);
    } else {
        console.log(speditionCost = 10);
    };

    // includo ESERCIZIO 6
    const sconto = totalCart * 0.2;
    return totalCart - sconto + speditionCost;
};
checkOut(45);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let number1 = 10;
let number2 = 8;
let number3 = 11;

function fromLowerToHigher(number1, number2, number3){
    if(number1 > number2 && number2 > number3 && number3 < number1){
        console.log("i valori sono corretti");
    } else {
        console.log("hai sbagliato, controlla i valori");
    };
};
fromLowerToHigher();

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
function dataTipo(tipoNumero){
    if(typeof tipoNumero === "number"){
        console.log("è un numero");
    } else {
        console.log("non è un numero");
    };
};
dataTipo("10");
dataTipo(10);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
function oddOrEven(nino){
    if(nino % 2 === 0){
        console.log("pari");
    } else {
        console.log("dispari");
    };
};
oddOrEven(14);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
// let val = 7;
let val = 7;
switch (val) {
    case val < 10:
        console.log("meno di 10");
        break;
    case val < 5:
        console.log("meno di 5");
        break;
    case val >= 10:
        console.log("uguale a 10 o maggiore");
    default:
        console.log("hai finito i numeri");
};

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let pippo;
// switch(pippo){
//     case pippo < 5:
//         console.log("tiny");
//         break;
//     case pippo < 10:
//         console.log("small");
//         break;
//     case pippo < 15:
//         console.log("medium");
//         break;
//     case pippo < 20:
//         console.log("large");
//         break;
//     case pippo >= 20:
//         console.log("huge");
//         break;
//     default:
//         console.log("hai finito");
// };
function numeroPippo(pippo){
    if(pippo < 5){
        console.log("tiny");
    } if(pippo < 10){
        console.log("small");
    } if(pippo < 15){
        console.log("medium");
    } if(pippo < 20){
        console.log("large");
    } if(pippo >= 20){
        console.log("huge");
    };
};
numeroPippo();

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

let isMale;
let gender = isMale ? "female" : "male";
// isMale è la condizione
console.log(gender);

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/
let n = 0;
x = 0;
while(n < 5){
    n++;
    console.log(n);
    x += n;
};

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/
for(let i = 0; i <= 10; i++){
    console.log(i);
};

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/


/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/




