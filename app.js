

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const sum = (a,b) => {
    return a + b
}

const fromDollarToYen = (a) => {
    return a * (127.9/1.2)
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

function fromYenToPound (a) {
    return a * (0.8/127.9)
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

