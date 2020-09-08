const answerPhone = require("../src/asyncJest");

/* Primeiro commit 
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende",  async () => {
    // assert.fail();
    answerPhone.answerPhone = jest.fn().mockResolvedValue('Oi!');
    expect(answerPhone.answerPhone(true)).resolves.toBe('Oi!');

  });

  test("ocupado", async () => {
    // assert.fail();
    answerPhone.answerPhone = jest.fn().mockRejectedValue('Infelizmente não podemos atender...');
    expect(answerPhone.answerPhone(false)).rejects.toBe('Infelizmente não podemos atender...');
  });
});
