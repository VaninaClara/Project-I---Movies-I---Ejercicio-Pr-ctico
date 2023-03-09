// Me traigo el modelo de los libros para poder acceder
// a la colección y manipular los datos

const Movie = require("./movies.model");


// Declaro funciones que hacen cosas
const getAllMovies = async (req, res) => {
  try {
     const movies = await Movie.find();
  } catch (error) {
    res.json("Error al recoger las movies", error);
  }
};

// Exporto esas funciones 
module.exports = {
  getAllMovies,
};
