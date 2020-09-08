const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", async () => {
    const atende = await answerPhone(true).then(resolve => resolve)
    expect.assertions(1);
    expect(atende).toBe('Oi!');

  });
  test("ocupado", async () => {
    const ocupado = await answerPhone(false).catch(error => error);
    expect.assertions(1);
    expect(ocupado).toBe('Infelizmente não podemos atender...')
  });
});
