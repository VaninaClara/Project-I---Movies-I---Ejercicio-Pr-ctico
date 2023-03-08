// Me traigo la librería express para levantar el servidor

// Me traigo la librería dotenv para poder leer las variables que tenga 
// en mi .env

require("dotenv").config();

// Creo la variable PORT y le doy el valor que esta 
// en mi .env, accediendo a ella mediante process.env.NOMBREVARIABLE

const PUERTITO = process.env.PORT;

// Me traigo mi base de datos
const db = require("./src/utils/db.js");
// Estoy ejecutando la función connectDB de mi archivo db.js
// que se encuentra en ./src/utils/db.js
db.connectDB();

const express = require("express");

// Ejecuto la variable express que tiene todo lo de la libreria
// Y lo guardo en mi variable server.
// De esta manera tendré un montón de funciones que podré ejecutar,
// para que realice el servido.
const server = express();

// una función que ejecuta el servidor, en este caso para utilizar una ruta
// para mostrar algo o para enrutar de otra manera.

server.use("/", (req, res) => {
    res.send("Funcionando")
})

// El servidor esta escuchando. No hace nada.

server.listen(8000, () =>{
    console.log("El servidor esta escuchando en http://localhost:" + PUERTITO);
})