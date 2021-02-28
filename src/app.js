//*****************REQUIRES****************** */
const express = require('express');
const path = require('path');

//************Express **************** */
const app = express();

// ************ Template Engine - (don't touch) ************
app.use(express.static(__dirname + '/../public')); // para q se vea el CSS
app.use(express.urlencoded({ extended: false })); // Arma el objeto body

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas


// Rutas PUTAS!!!!!!!!!! tienen que ir siempre abajooooooooooo!!!!!
const mainRouter = require('./routes/main'); // Rutas main


app.use('/', mainRouter);

// ************ exports app - dont'touch ************/
module.exports = app;
