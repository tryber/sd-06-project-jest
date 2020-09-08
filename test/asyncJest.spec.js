const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

// Resolvi fazer de 2 jeitos diferentes, um com Async e Await e outro sem para consolidar melhor.
describe('o retorno do telefonema', () => {
  test('atende', async () => {
    const result = await answerPhone(true);
    expect(result).toEqual('Oi!');
  });
  test('ocupado', () => {
    expect.assertions(1);
    return expect(answerPhone(false)).rejects.toEqual('Infelizmente não podemos atender...');
  });
});
