// importar la función sum del archivo app.js
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

///dollar a yenes
test("One dollar should be 134,96 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3)).toBe(383.70000000000005); //1 dolar son 134,96 yenes, entonces 3 dolares deberian ser = (3 * 127.9)
})

test("One yenes should be 0.0061 libras", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(50)).toBe(0.3127443315089914); //1 yenes son  0.00607 libras, entonces 50 yenes deberian ser = (50 / 127.9) * 0.8)
})

