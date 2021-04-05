const express = require('express');
const app = express();

const data = [
    {
        id: 123,
        nombre: "Polos"
    },
    {
        id: 124,
        nombre: "Pantalones"
    }
];

app.get('/categoria', (req, res) =>{
    res.json({
        categorias: data
    })
});

app.post('/categoria', (req, res) =>{
    res.json({
        message: "Guardado"
    })
});

app.delete('/categoria:id', (req, res) =>{
    res.json({
        message: "Guardado"
    })
});

app.put('/categoria:id', (req, res) =>{
    res.json({
        message: "Actualizado"
    })
});

module.exports = app;