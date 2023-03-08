// La libreria que se utiliza es mongoose,
// Para base de datos.
// Conectaré con la base de datos mediante una función.
// Y necesito mongoose.

// Me traigo la libreria
const mongoose = require("mongoose");

// Guardamos en una variable nuestro link
// a la base de datos para poder conectar.
const DB_LINK = process.env.MONGO_DB;

// Creamos la conexion con la base de datos
// Para poder exportarla y utilizarla en el index.js
const connectDB = async () => {
    try {
       await mongoose.connect(DB_LINK);
       console.log("Conexión exitosa");
    } catch (error) {
       console.log("No me puedo conectar", error);
    }
};

// Exportamos la función para que pueda ser utilizada
// desde cualquier archivo, en este caso la 
// ejecutaremos en index.js
module.exports = { connectDB };