const answerPhone = require("../src/asyncJest");

describe("o retorno do telefonema", () => {
  test("atende", async () => {
    expect.assertions(1);
    const answer = await answerPhone(true);
    expect(answer).toBe('Oi!');
  });

  test("ocupado", async () => {
    expect.assertions(1);

    try {
      const answer = await answerPhone(false);
    } catch (err) {
      expect(err).toBe('Infelizmente não podemos atender...');
    }
  });
});
