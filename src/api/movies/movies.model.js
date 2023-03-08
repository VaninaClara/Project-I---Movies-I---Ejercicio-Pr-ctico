// Me traigo mongoose porque voy a referenciar
// a una colección de mi base de datos.
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  year: { type: Number, required: true },
  genre: {
    type: String,
    required: true,
    enum: ["Acción", "Animación", "Ciencia ficción", "Comedia romántica"],
  },
},
{
timestamps: true,
collection: "movies"
}
);

// En minúsculas y en plural
const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;