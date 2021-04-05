const express = require('express');
const app = express();

app.use(require('./categoria_controller'));
app.use(require('./producto_controller'));
app.use(require('./usuario_controller'));

module.exports = app;