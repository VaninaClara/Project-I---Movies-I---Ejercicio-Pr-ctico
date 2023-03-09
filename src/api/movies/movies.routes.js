// Las rutas no pueden funcionar sin controladores
// Me traigo todas las funciones de mi controlador
const { getAllMovies } = require("./movies.controllers");

// Me traigo el router de express para poder gestionar
// mis rutas
const moviesRoutes = require("express").Router();

// Aqui estamos llegando gracias al index.js
// utilizando el servidor para declarar la 
// ruta principal que gestiona el resto de rutas
// que ya tenemos aqui; es decir, en el index.js --> server.use("/movies",moviesRoutes);
// 

// Declaro rutas y qué ejecuta cada ruta
// En este caso la ruta / ejecuta la función declarada en
// el controlador getAllMovies 
moviesRoutes.get("/", getAllMovies);


module.exports = moviesRoutes;