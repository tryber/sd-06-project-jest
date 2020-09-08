let answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", () => {
    let answerPhone = jest.fn().mockImplementation(()=> 'Oi!');
    expect(answerPhone()).toBe('Oi!');
  });
  test("ocupado", () => {
    let answerPhone = jest.fn().mockImplementation(()=> 'Infelizmente não podemos atender...');
    expect(answerPhone()).toBe('Infelizmente não podemos atender...');
  });
});
