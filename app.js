// esta es mi función que suma dos números
/*const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))*/

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromEuroToDollar (valueEuros)
{
    let eur = valueEuros * oneEuroIs.USD;
    //console.log("Un euro equivale en dolares "+ eur);

    return eur;
}


function fromDollarToYen (valueDollar)
{
    let yen = valueDollar * oneEuroIs.JPY;
    //console.log("Un dolar equivale en yenes "+ yen);

    return yen;
}   


function fromYenToPound (valuesYenes)
{
     let pnd = (valuesYenes / oneEuroIs.JPY) * oneEuroIs.GBP;
    //console.log("Un yenes equivale en libras "+ pnd);
    return pnd;
}

fromEuroToDollar (100);
fromDollarToYen (3);
fromYenToPound (50);



// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound  };

