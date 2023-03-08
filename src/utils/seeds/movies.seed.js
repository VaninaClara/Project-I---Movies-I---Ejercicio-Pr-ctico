// Me traigo mongoose porque necesito subir datos a la bbdd
const mongoose = require("mongoose");

// Importo el modelo para poder utilizar el Schema
const Movie = require("../../api/movies/movies.model");

require("dotenv").config();

const DB_URL = process.env.MONGO_DB;

const movies = [
  {
    title: "The Matrix",
    director: "Hermanas Wachowski",
    year: 1999,
    genre: "Acción",
  },
  {
    title: "The Matrix Reloaded",
    director: "Hermanas Wachowski",
    year: 2003,
    genre: "Acción",
  },
  {
    title: "Buscando a Nemo",
    director: "Andrew Stanton",
    year: 2003,
    genre: "Animación",
  },
  {
    title: "Buscando a Dory",
    director: "Andrew Stanton",
    year: 2016,
    genre: "Animación",
  },
  {
    title: "Interestelar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Ciencia ficción",
  },
  {
    title: "50 primeras citas",
    director: "Peter Segal",
    year: 2004,
    genre: "Comedia romántica",
  },
];
// Buscar a ver si hay movies;
// Si hay los borra todos
// Y luego sube las nuevas movies

// find decuelve un array con todas las movies
// que encuentre, de no encontrar ninguno
// será un array vacío
mongoose
  .connect(DB_URL)
  .then(async () => {
    const allMovies = await Movie.find();

    if (libros.length) {
      await Movie.collection.drop();
      console.log("Movies eliminadas con éxito");
    }
  })
  .catch((error) => console.log("Error borrando los datos de la bbdd", error))
  .then(async () => {
     await Movie.insertMany(movies);
     console.log("Movies creadas con éxito");
  })
  .catch((error) => console.log("Error subiendo las movies a la bbdd", error))
  .finally(() => mongoose.disconnect());