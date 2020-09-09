const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro bo(o)leano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  it('atende', () => {
    expect.assertions(1);
    return expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  it('ocupado', () => {
    expect.assertions(1);
    return expect(answerPhone(false)).rejects.toMatch('Infelizmente não podemos atender...');
  });
});

// como visto em : https://deltice.github.io/jest/docs/pt-BR/asynchronous.html#content
