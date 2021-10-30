// Required imports
const express = require('express');
const mongoose = require('mongoose');
const PersonaSchema = require("./modelos/Persona");

const app= express();
const router = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Connection DATABASE (connection string)
mongoose.connect("mongodb+srv://prog_web:ProgWebMinTic2022@clusterprogweb.vevqa.mongodb.net/JobsTI?retryWrites=true&w=majority");


//CRUD operations
router.get('/', (req, res) => {
    res.send("El inicio de mi API")
});

router.get('/persona', (req, res) => {
    PersonaSchema.find(function (err, datos){
        if(err){
            console.log("Error leyendo personas");
        }else{
            res.send(datos);
        }
    })
});

//CREATE
router.post('/persona', (req, res) => {

    let nuevaPersona = new PersonaSchema({
        idPersona: req.body.id,
        tipoDocumento: req.body.tipoD,
        nombresPersona: req.body.nombresP,
        apellidos: req.body.apellidosP,
        direccion: req.body.direccionP,
        correo: req.body.correoP,
        telefono: req.body.telefonoP,
        enlaceWeb: req.body.enlaceP,
        perfilPersona: req.body.perfilP

    });

    nuevaPersona.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Persona almacenada")
    })

});

app.use(router);
app.listen(3000, () => {
    console.log("Server is running in port 3000!");
});