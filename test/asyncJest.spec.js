const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano. \o/
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", () => {
    // assert.fail();
    return answerPhone(true).then(msg => expect(msg).toBe('Oi!'));
  });
  test("ocupado", () => {
    // assert.fail();
    return answerPhone(false).catch(msg => expect(msg).toBe('Infelizmente não podemos atender...'));
  });
});
