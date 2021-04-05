const express = require('express');

const app = express();
//body json
app.use(express.json());
app.use(require("./rutas/index"));

app.listen(8080, ()=>{
    console.log("server ok. Port: 8080");
});
