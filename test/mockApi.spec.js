const api = require('../src/mockApi');

describe('verifica o usuário', () => {
  // Crie sua mock da função fetchURL() aqui
  api.fetchURL = jest.fn();
  const requestReturn = {
    gender: 'male',
    name: { title: 'Mr', first: 'Antônio', last: 'Britto' },
    location: { country: 'Brazil' },
    email: 'tunico@bol.com.br',
    login: { username: 'tunicao123', password: '1234567890' },
  };

  api.fetchURL.mockResolvedValue(requestReturn);
  test('verifica se o usuário é o tunico', async () => api.fetchURL().then((user) => {
    expect(user.gender).toEqual('male');
    expect(user.name.first).toEqual('Antônio');
    expect(user.name.last).toEqual('Britto');
    expect(user.location.country).toEqual('Brazil');
    expect(user.email).toEqual('tunico@bol.com.br');
    expect(user.login.username).toEqual('tunicao123');
    expect(user.login.password).toEqual('1234567890');
  }));
});
