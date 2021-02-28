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
const counterMiddleware = require('../middlewares/counter');

router.get('/', counterMiddleware, mainController.home);


// pruebas
router.post('/pruebas',  pruebasController.pruebasStore);
router.get('/solong', pruebasController.solong);

//poopy
router.get('/poopy',  counterMiddleware,poopyController.poopy);
router.post('/poopy', poopyController.poopyStore);

//span
router.get('/span', counterMiddleware, poopyController.span);
router.post('/span', poopyController.spanStore);

//Mario results
router.get('/marioresults',counterMiddleware,  poopyController.mario);

//Simpson
router.get('/simpson', counterMiddleware, poopyController.simpson);
router.post('/simpson', poopyController.simpsonStore);

//from hooray03
router.post('/ultimate',counterMiddleware,  poopyController.ultimate);

//from ultimate.ejs
router.post('/pepinito', counterMiddleware, poopyController.pepinito);

//from pepinito / amarillo.ejs
router.post('/amarillo', counterMiddleware, poopyController.amarillo);


// Pruebas para guardar datos
router.get('/form', poopyController.form);



// ************ exports app - dont'touch ************/
module.exports = router;
