const express = require('express');
const app = express();

const data = [
    {
        id: 123,
        categoria: "Polos",
        producto: "Polo Rambo"
    },
    {
        id: 124,
        categoria: "Polos",
        producto: "Polo Levy"
    }
];

app.get('/producto', (req, res) =>{
    res.json({
        categorias: data
    })
});

app.post('/producto', (req, res) =>{
    res.json({
        message: "Guardado"
    })
});

app.delete('/producto:id', (req, res) =>{
    res.json({
        message: "Guardado"
    })
});

app.put('/producto:id', (req, res) =>{
    res.json({
        message: "Actualizado"
    })
});

module.exports = app;