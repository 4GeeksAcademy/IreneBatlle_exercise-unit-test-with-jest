const { default: test } = require('node:test');

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


const fromDollarToYen = function (valueInDollar){
    let valueInYen = valueInDollar*153.45;
    return valueInYen;

}

const fromYenToPound = function (valueInYen){
    let valueInPound = valueInYen*0.0052;
    return valueInPound;

}


const sum =(a,b)=>{
    return a+b;
};


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}

let oneEuroIs={
    "JPY":156.5,
    "USD":1.07,
    "GBP":0.87,
};

