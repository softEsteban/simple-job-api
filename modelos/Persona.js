const mongoose = require('mongoose');

let PersonaSchema = new mongoose.Schema({
    idPersona: Number,
    tipoDocumento: String,
    documento: String,
    nombres: String,
    apellidos: String,
    direccion: String,
    correo: String,
    telefono: String,
    enlaceWeb: String,
    perfilPersona: String

});

module.exports = mongoose.model("persona", PersonaSchema, "Personas");