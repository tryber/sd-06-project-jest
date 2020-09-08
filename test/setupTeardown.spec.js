const adventure = require('../src/setupTeardown');
const { randomAttack } = require('../src/setupTeardown');
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
  // Adicione seu código aqui
    beforeEach(() => {
      randomAttack();
      console.log(adventure.specialists);
    });
  
    afterEach(() => {
    console.log(adventure.specialists);
    });

    it('should have 5 adventures after first attack', () => {
      expect(adventure.specialists.length).toBe(5);
    });
    it('should have 4 adventures after first attack', () => {
      expect(adventure.specialists.length).toBe(4);
    });
    it('should have 3 adventures after first attack', () => {
      expect(adventure.specialists.length).toBe(3);
    });
    it('should have 2 adventures after first attack', () => {
      expect(adventure.specialists.length).toBe(2);
    });
    it('should have 1 adventures after first attack', () => {
      expect(adventure.specialists.length).toBe(1);
    });
  });


