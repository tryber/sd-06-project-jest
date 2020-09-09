const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
const awserTrue = true;
const awserFaslse = false
describe("o retorno do telefonema", () => {
  test("atende", async () => {
    //   try {
    //     await answerPhone(aux).then(data => {
    //      expect(data).equal('Oi!');
    //     });
    //  } catch (error) {
    //   expect(aux).equal('Infelizmente não podemos atender...');
    //  }
    await answerPhone(awserTrue).then(data => {
      expect(data).toEqual('Oi!');
    });
  });
  test("ocupado", async () => {
    await answerPhone(awserFaslse).catch(error => {
      expect(error).toEqual('Infelizmente não podemos atender...');
    });
  });
});
