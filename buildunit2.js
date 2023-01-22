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

function calcolaCheckOut(totalShoppingCart){
    let checkOut;
    if(marco.isAmbassador, paul.isAmbassador, amy.isAmbassador === true){
        checkOut = shippingCost - (shippingCost * 30);
    } else {
        return shippingCost;
    };
};
calcolaCheckOut();