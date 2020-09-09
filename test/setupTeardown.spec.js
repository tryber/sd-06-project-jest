const adventure = require('../src/setupTeardown');
const { specialists } = require('../src/setupTeardown');
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

describe('quem sobreviveu?', () => {
  beforeEach(() => {
    adventure.randomAttack();
  });

  afterEach(() => {
    
    // No fim dos testes, imprima uma mensagem com o nome do aventureiro que sobreviveu.
    console.log(`Survived, ${adventure.specialists[0].nome}...`);
    // Para ficar mais visível, imprima na tela após cada teste o grupo de aventureiros restante.
    let specialistsSurvived = '';
    specialistsSurvived = adventure.specialists.flatMap(specialists => specialists.nome);
    console.log(`In the game ${specialistsSurvived}.`);
  });

  it('depois da primeira aventura', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  it('depois da segunda aventura', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  it('depois da terceira aventura', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  it('depois da quarta aventura', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  it('depois da quinta aventura', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});
