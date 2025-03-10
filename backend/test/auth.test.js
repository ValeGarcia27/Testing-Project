const request = require('supertest');
const app = require('../app');

describe('POST /login', () => {

  let credenciales;

  beforeEach(() => {
    // Dado que el usuario tiene credenciales correctas
    credenciales = { email: 'user@example.com', password: 'password123' };
  });

  it('Dado que las credenciales son correctas, Cuando el usuario inicia sesión, Entonces debe recibir un mensaje de éxito', async () => {
    // Cuando el usuario intenta iniciar sesión con credenciales correctas
    const response = await request(app).post('/login').send(credenciales);

    // Entonces la respuesta debe indicar éxito
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Inicio de sesión exitoso');
  });

  it('Dado que las credenciales son incorrectas, Cuando el usuario inicia sesión, Entonces debe recibir un mensaje de error', async () => {
    // Dado que el usuario tiene credenciales incorrectas
    credenciales.password = 'contraseñaIncorrecta';

    // Cuando el usuario intenta iniciar sesión con credenciales incorrectas
    const response = await request(app).post('/login').send(credenciales);

    // Entonces la respuesta debe indicar error
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Credenciales inválidas');
  });
});



