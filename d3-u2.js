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



