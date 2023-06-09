const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(dirname, '/public')));

app.get('/', (req,res) =>{
    res.send("Cambie");
});

app.get('/mostrar_mensaje', (req,res) =>{
    res.send("Hola mundo");
})
app.get('/mostrar_sitio', (req,res) =>{
    res.send((dirname+ 'index.html'));
})

app.get('*', (req,res) =>{
    res.send("ruta restringida, hermos localixado la direccion")
})

app.listen (3002, function(){
    console.log("Servido corriendo");
})