const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", () => {
    expect.assertions(1);
    /*expect.assertions(number) verifies that a certain number of assertions are called during a test.This is often 
    useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.*/
    return expect(answerPhone(true)).resolves.toBe('Oi!');
    /*Use resolves to unwrap the value of a fulfilled promise so any other matcher can be chained. If the promise is 
    rejected the assertion fails.*/
  });
  test("ocupado", () => {
    expect.assertions(1);
    return expect(answerPhone(false)).rejects.toBe('Infelizmente não podemos atender...');
  });
});
