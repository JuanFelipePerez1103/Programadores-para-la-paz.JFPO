const express = require('express');
const app = express();

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('Servidor semana 5 funcionando');
});

// API de información
app.get('/api/info', (req, res) => {
    res.json({ 
        mensaje: "API de información comunitaria funcionando",
        estado: "Activa" 
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});

