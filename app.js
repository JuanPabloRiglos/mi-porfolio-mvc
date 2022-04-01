const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3123;

const mainRouter = require('./routers/main.js');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
    });

   