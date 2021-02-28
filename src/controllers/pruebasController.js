


const controller = {

	
	pruebasStore: (req, res) => {
		
		let answer = req.body.word
		if (answer.toLowerCase() == "mellon"){

			res.redirect('/poopy');
		}else{
			res.render('wrong_answer', {pista: "Es del Señor de los Anillos. Preguntale a tu amigo nerd"})
		}

		
    },
    apivisitors: (req, res) => {
		res.send(visitors);
    },
    solong: (req, res) => {
		res.render("quitter");
	},
}

module.exports = controller;