const prices = [34,5,2];
const shippingCost = 50;

const marco = {
    name: 'Marco',
    lastName: 'Rossi',
    isAmbassador: true,
};

const paul = {
    name: 'Paul',
    lastName: 'Flynn',
    isAmbassador: false,
};

const amy = {
    name: 'Amy',
    lastName: 'Reed',
    isAmbassador: false,
};

/* Costo totale di spedizione = lista di prezzi, utenti e costo fisso di spedizione
*/

function totalCart(price, user, ship){
    let totalPrice = 0;
    let total = 0;

    for(let i = 0; i < price.length; i++){
        totalPrice += price[i];
    };
    if(user.isAmbassador === true){
        totalPrice = totalPrice - (totalPrice * 0.3);
    };
    if(totalPrice > 100){
        total = totalPrice;
    } else {
        total = totalPrice + ship;
    };
    return total;
};

let totalOfCart = totalCart(prices, marco, shippingCost);
console.log(`Il totale da pagare per te è ${totalOfCart}`);

// function calcolaCheckOut(totalShoppingCart){
//     let checkOut;
//     if(marco.isAmbassador, paul.isAmbassador, amy.isAmbassador == true){
//         checkOut = shippingCost - (shippingCost * 30);
//     } else if(marco.isAmbassador, paul.isAmbassador, amy.isAmbassador == false) {
//         return shippingCost;
//     } else {
//         if(checkOut > 100){
//             return shippingCost;
//         } else {
//             let valoreFornito;
//             return shippingCost + valoreFornito;
//         };
//     };
// };


