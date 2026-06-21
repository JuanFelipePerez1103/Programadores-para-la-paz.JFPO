const express = require('express');
const app = express();

app.use(express.json());N

app.post('/api/incidencia', (req, res) => {
    const datos = req.body;n
    console.log("Incidencia recibida:", datos);
    res.json({ mensaje: "Incidencia registrada correctamente", datos: datos });
});

app.listen(3000, () => {
    console.log("Servidor escuchando en puerto 3000");
});
