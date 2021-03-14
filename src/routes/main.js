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


router.get('/',  mainController.home);


// pruebas
router.post('/pruebas',  poopyController.pruebasStore);
router.get('/solong', poopyController.solong);

//poopy
router.post('/poopy', poopyController.poopyStore);

//span
router.get('/span',  poopyController.span);
router.post('/span', poopyController.spanStore);

//Mario results
router.get('/marioresults',  poopyController.mario);

//Simpson
router.get('/simpson',  poopyController.simpson);
router.post('/simpson', poopyController.simpsonStore);

//from hooray03
router.post('/ultimate',  poopyController.ultimate);

//from ultimate.ejs
// router.post('/pepinito',  poopyController.pepinito);

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


// Pruebas para guardar datos
router.get('/form', poopyController.form);



// ************ exports app - dont'touch ************/
module.exports = router;
