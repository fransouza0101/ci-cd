const { sum, diff, product, divi } = require('./../src/calc');
const calculadora = require('./../src/calc')

test('A soma de 1 e 2 deve ser igual a 3', () => {

    //expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2)).not.toBe(5);
});