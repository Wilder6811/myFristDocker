const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

// Configura la conexión a PostgreSQL en localhost
const client = new Client({
  host: 'localhost',  // Conectar a PostgreSQL en tu máquina local
  port: 5454,         // Puerto donde instalaste PostgreSQL localmente
  user: 'postgres',   // Cambia esto según tu configuración
  password: '68065833',  // Cambia esto según tu configuración
  database: 'postgres'  // Cambia esto si tu base de datos se llama diferente
});

// Conectar a la base de datos
client.connect()
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.error('Error de conexión', err));

// Crear la ruta /Employes
app.get('/Employes', async (req, res) => {
  try {
    // Consulta para obtener todos los empleados
    const result = await client.query('SELECT * FROM Employes');
    res.json(result.rows);  // Devolver los datos como JSON
  } catch (err) {
    console.error('Error al obtener los empleados', err);
    res.status(500).send('Error al obtener los datos');
  }
});

// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
