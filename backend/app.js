const express = require('express');

const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const emailValido = 'user@example.com';
  const passwordValida = 'password123';

  if (email === emailValido && password === passwordValida) {
    return res.status(200).json({ message: 'Inicio de sesión exitoso' });
  }

  return res.status(401).json({ message: 'Credenciales inválidas' });
});

// Solo inicia el servidor si no se está ejecutando en un entorno de prueba
if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('Servidor en ejecución en el puerto 3000');
  });
}

module.exports = app;
