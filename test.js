// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// Importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('suma de 14 + 9 es igual a 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
})


test("Un euro deberia ser 1.07 dolares", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("Un JPY es igual a (156.5/1.07) = 146.26 dolares", function(){
    const yen = fromDollarToYen(100);
    const expected = ((oneEuroIs.USD/oneEuroIs.JPY))*100;
    expect(fromDollarToYen(100)).toBe((oneEuroIs.USD/oneEuroIs.JPY)*100);

})

test("una Libra GBP es igual a (156.5/0.87) JPY", function(){
    const pound = fromYenToPound(1000);
    const expected = (oneEuroIs.JPY/oneEuroIs.GBP)*1000;
    expect(fromYenToPound(1000)).toBe((oneEuroIs.JPY/oneEuroIs.GBP)*1000);

})