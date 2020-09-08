const adventure = require('../src/setupTeardown');
/*
Num universo não tão distante, um grupo de aventureiros da Trybe enfrentam uma série de testes.
O grupo parte em direção ao sucesso, mas,
devido a ameaça de criaturas temíveis, o grupo não chegará inteiro ao fim.
Após cada aventura um de nossos aventureiros cairá.
Cada um dos testes abaixo verifica a quantidade de aventureiros após cada iteração.
Sua missão aqui é:

  - Use a função randomAttack do objeto adventure
  que remove um dos aventureiros toda vez que é chamada,
  ela deve funcionar entre cada teste.
  Opcional:
  - Para ficar mais visível, imprima na tela após cada teste o grupo de aventureiros restante.
  - No fim dos testes, imprima uma mensagem com o nome do aventureiro que sobreviveu.

PS: Os codinomes dos aventureiros são reais! Tentem descobrir quem é quem!

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('Who will be the last man standing?', () => {
  beforeEach(() => adventure.randomAttack());
  afterEach(() => console.log('Players remaining', adventure.specialists));
  afterAll(() => console.log(`${adventure.specialists[0].nome} was the last man standing! (pure luck)`))

  test('after first round', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  test('after second round', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  test('after third round', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  test('after fourth round', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  test('after fifth round', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});
