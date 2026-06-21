const express = require('express');
const app = express();
app.use(express.json());

let reportes = []; 

app.get('/reportes', (req, res) => {
    res.json(reportes);
});


app.post('/reportes', (req, res) => {
    const nuevoReporte = req.body;
    reportes.push(nuevoReporte);
    res.status(201).send("Reporte registrado con éxito");
});

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));

