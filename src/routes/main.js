// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

//para guardar los datos en users.json***
const storageDisk = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, __dirname + '/../../public/images/avatars');
	},
	filename: (req, file, cb) => {
		let imageFinalName = `user_avatar_${Date.now()}${path.extname(file.originalname)}`;
		cb(null, imageFinalName);
	}
});

const upload = multer({ storage: storageDisk });

/************ Controller Require *************/
const mainController = require('../controllers/mainController');
const pruebasController = require('../controllers/pruebasController');
const poopyController = require('../controllers/poopyController');

// middleware
router.get('/',  poopyController.home);

// pruebas
router.post('/pruebas',  poopyController.pruebasStore);
router.get('/solong', poopyController.solong);

//poopy
router.post('/poopy', poopyController.poopyStore);

//Viene de la pantalla del dvd
router.get('/melaaguanto', poopyController.aguante);


//span
router.get('/span',  poopyController.span);
router.post('/span', poopyController.spanStore);

//Mario results
router.get('/mario', poopyController.marioPrueba)

//mario opcional
router.get('/salondecastigo', poopyController.cafeteria)

// opciones
router.get('/opcion4', poopyController.opcion4)
router.get('/opcion3', poopyController.opcion3)
router.get('/opcion2', poopyController.opcion2)
router.get('/terminal', poopyController.terminal)


//respuesta al de mario
router.post('/marioresults',  poopyController.mario);

// VISTA DE PRUEBA MARIO

//Simpson
router.get('/simpson',  poopyController.simpson);
router.post('/simpson', poopyController.simpsonStore);

//from hooray03
router.post('/ultimate',  poopyController.ultimate);

//from ultimate.ejs
router.get('/pepinito',  poopyController.pepinito);

//from pepinito
router.get('/gladiola',  poopyController.gladiola);

//from gladiola.ejs
router.get('/amarillo',  poopyController.amarillo);
router.post('/amarillo',  poopyController.amarilloAnswer);

//from gladiola.ejs
router.get('/javascript',  poopyController.javascript);

// from Javascript
router.get('/violet',  poopyController.violet);

//from violet o Amarillo answer
router.get('/graciastotales', poopyController.totales)

//from amarillo / comments.ejs
router.post('/comments',  poopyController.comments);

// ranking
router.get('/ranking', poopyController.ranking);

// Pruebas para guardar datos
router.get('/form', poopyController.form);



// ************ exports app - dont'touch ************/
module.exports = router;
