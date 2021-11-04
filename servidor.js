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


app.use(router);
app.listen(3000, () => {
    console.log("Server is running in port 3000!");
});

//CRUD operations
router.get('/', (req, res) => {
    res.send("El inicio de mi API")
});

//CREATE
router.post('/persona', (req, res) => {

    let nuevaPersona = new PersonaSchema({
        idPersona: req.body.id,
        tipoDocumento: req.body.tipoD,
        documento: req.body.document,
        nombres: req.body.nombresP,
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

//READ
router.get('/persona', (req, res) => {
    PersonaSchema.find(function (err, datos){
        if(err){
            console.log("Error leyendo personas");
        }else{
            res.send(datos);
        }
    })
});

//UPDATE
router.put('/persona/:id', function(req, res, next){
    PersonaSchema.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        PersonaSchema.findOne({_id: req.params.id}).then(function(persona){
            res.send(persona);
        });
    });
});

//DELETE
router.delete('/persona/:id', function(req, res, next){
    PersonaSchema.findByIdAndRemove({_id: req.params.id}).then(function(persona) {
        res.send(persona);        
    });
});
