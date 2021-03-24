//require modules

const axios = require('axios');
const fs = require('fs');
const db = require('../database/models')
const sequelize = db.sequelize;

let fakename = ["Max Power", "Booby Curvas", "Pechugas Larú", "Cosme Fulanito", "Homero Thompson", "Cazaputas42", "Edna K", "nombre generado por computadora"]


const controller = {

    home: (req, res) => {

        db.User.count()
        .then(result => {
                // res.send(result)
                res.render("index", {result})
            }

        )
        .catch(error => console.log(error));

        // res.render('index');
    },
    	
	pruebasStore: (req, res) => {
		
		let answer = req.body.word
		let username = req.body.username

		if (!username){
			 username = fakename[Math.floor(Math.random() * fakename.length)]
		}

		if (answer.toLowerCase() == "mellon"){

            db.User.create({
                name: username,
            })
            .then(name => {
                
                let username = name.dataValues.name
                req.session.user = name.dataValues.id
                console.log(req.session.user);
                res.render('poopy', {username});
                // res.send('Comentario enviado');
            })
            .catch(error => console.log(error));    

            // db.User.findOne

          
		}else{
           
			res.render('wrong_answer', {pista: "Es del Señor de los Anillos. Preguntale a tu amigo nerd"})
		}

		
    },
    solong: (req, res) => {
		res.render("quitter");
	},

	poopyStore: (req, res) => {

        
	// Make a request for a user with a given ID
        axios.get('https://rickandmortyapi.com/api/character/244')
        .then(function (response) {
        // handle success
        let episodeQty = response.data.episode.length

        if (req.body.episodes == episodeQty){

            db.User.update({
                desafio01: 50
            },
            {
                where: {
                    id: req.session.user
                }
            }
            )
            .then(result => {
                console.log(result);
                req.session.desafio01 = 50
                res.render('hooray01' )
            })
            .catch(error => console.log(error));
           
            // guardar que paso "desafio01" en DB
        } else {

            let pista

            if ( req.body.episodes <= 0){
                pista = "Posta pensaste que no iba a atajar este error. Messtrañaa"
            } else {
                pista = "id 244"
            }

            res.render('wrong_answer', {pista })
        }
        
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
                    
		
    },

    span: (req, res) => {
        res.render('span')
    },

    spanStore: (req, res) => {
        
   /*      let success = {
            status: 200,
            traduccion: "ganaste",
            keyword: "SuckiT",
            next_test: "Family Game",
            ver: "https://www.youtube.com/watch?v=Na8rqq47gi0&ab_channel=Typhlosion4President",
            profesion: "plumber",
            worlds: {
                World_1: "Grass Land", 
                World_2: "Desert Land", 
                World_3: "Water Land",
                World_4: "Giant Land", 
                World_5: "Sky Land",
                World_6: "Ice Land", 
                World_7: "Pipe Land", 
                World_8: "Dark Land"
            },
            search: "query",
            hint: "are made for walking",
            strength: "black flower resistant",
            color: "Green",
            query: "?t=2852",
            test: {
                question: "In which world & level do you get the boot?",
                warning: "No hyphens in answer",
                answer: "https://correcachetescorre.herokuapp.com/marioresults?search_query={answer}"
            },
            your_face: "🤔",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Left: "ArrowLeft",
            Right: "ArrowRight",

        } */

        if (req.body.spanword == "SuckiT"){
            

            // guardar que paso "desafio02" en DB
            db.User.update({
                desafio02: 30
            },
            {
                where: {
                    id: req.session.user
                }
            }
            )
            .then(result => {
                                
                res.render('mario')
            })
            .catch(error => console.log(error));
        } else {

            let pista
            if (req.body.spanword == "suckit" || req.body.spanword == "SUCKIT" ){
                pista = "No esta mal, pero hay un temita con las mayusculas que no me agrada"
            } else if (req.body.spanword == "suck it" || req.body.spanword == "Suck iT"  ){
                pista = "mmm 🤔 me pa te sobran espacios"
            } else {
                pista = "BUE YA ES DEMASIADA AYUDA. En la consola: document.querySelectorAll('span')[i].innerText"
            }



            res.render("tryagain", {respuesta: req.body.spanword, pista: pista})
        }
        
    },
    mario: (req, res) => {
        
        if(req.body.marioanswer == 3){
            
            // guardar que paso "desafio03" en DB
            
            db.User.update({
                desafio03: 60
            },
            {
                where: {
                    id: req.session.user
                }
            }
            )
            .then(result => {
                                
                res.render('hooray02')
            })
            .catch(error => console.log(error));
        } else {
            res.render('wrong_answer', {pista: "A ver, son numeros podes probar"})
        }
    },

    simpson: (req, res) => {
       
        res.render('simpson')
    },
    simpsonStore: (req, res) => {

        if(req.body.simpquiz01 == "GreenDay"
            && req.body.simpquiz02 == "Bajo"
            && req.body.simpquiz03 == "EltonJohn"
            && req.body.simpquiz04 == "Sting"
            && req.body.simpquiz05 == "StLouis"
            && req.body.simpquiz06 == "RollingStones"
            && req.body.simpquiz07 == "Bush"
            && req.body.simpquiz08 == "Zero"
            && req.body.simpquiz09 == "MagicPinball"
            && req.body.simpquiz10 == "SpinalTap"){

                // guardar que paso "desafio04" en DB
                db.User.update({
                    desafio04: 100
                },
                {
                    where: {
                        id: req.session.user
                    }
                }
                )
                .then(result => {
                    
                    res.render("hooray03")
                 
                })
                .catch(error => console.log(error));

        }else{

            res.render("toobad")
        }
        
    },
    ultimate:  (req, res) => {
  
        if(req.body.ultimate == "42"){

            // guardar que paso "desafio05" en DB
            db.User.update({
                desafio05: 20
            },
            {
                where: {
                    id: req.session.user
                }
            }
            )
            .then(result => {
                
                res.render('ultimate')
             
            })
            .catch(error => console.log(error));
        } else {
            res.send('Perdiste')
        }
    },

    gladiola: (req, res) => {

        res.render("gladiola")
    },
    javascript: (req, res) => {

        res.render("noscript")
        
    },
    violet: (req, res) => {
        
        // guardar que paso "desafio07" en DB
        db.User.update({
            desafio07: 150
        },
        {
            where: {
                id: req.session.user
            }
        }
        )
        .then(result => {
            
            res.render("violet")
         
        })
        .catch(error => console.log(error));
        
    },
    amarillo: (req, res) => {

        res.render("amarillo")
    },
    amarilloAnswer: (req, res) => {

        // esto viene de // 
            
            let answer = req.body.respuestaAmarillo

            if (answer.toLowerCase() == "bgh"){
            
                // res.redirect('/poopy');
                
                // guardar que paso "desafio06" en DB
                db.User.update({
                    desafio06: 40
                },
                {
                    where: {
                        id: req.session.user
                    }
                }
                )
                .then(result => {
                    
                    res.render("comments")
                 
                })
                .catch(error => console.log(error));

            }else{
                res.render('wrong_answer', {pista: "reliquias, espadas y episodios"})
            }
        
            
    },
    totales: (req, res) =>{

        db.User.findAll({
            attributes: [[db.sequelize.literal('id'), 'id'],[db.sequelize.literal('name'), 'name'],[db.sequelize.literal('SUM(desafio01 + desafio02 + desafio03 + desafio04 + desafio05 + desafio06 + desafio07)'), 'total'],[db.sequelize.literal('createdAt'), 'inicio'],[db.sequelize.literal('updatedAt'), 'fin']],
            group : ['User.id'],
            raw: true,
            order: sequelize.literal('total DESC')
          })
        .then(response => {

            let result = response.map( user => {
                let minutos = Math.round(((Date.parse(user.fin) - Date.parse(user.inicio))/1000)/60)

                if (isNaN(minutos)){
                    minutos = 0
                }

                return {
                    id: user.id,
                    name: user.name,
                    total: (user.total + minutos)
                  }
            })

            function compare(a, b) {
                // Use toUpperCase() to ignore character casing
                const userA = Number(a.total)
                const userB = Number(b.total)
              
                let comparison = 0;
                if (userA > userB) {
                  comparison = -1;
                } else if (userA < userB) {
                  comparison = 1;
                }
                return comparison;
              }
              
              result.sort(compare);

        
                res.render("totales", {result})
            }

        )
        .catch(error => console.log(error));
    },

    ranking: (req, res) =>{

        db.User.findAll({
            attributes: [[db.sequelize.literal('id'), 'id'],[db.sequelize.literal('name'), 'name'],[db.sequelize.literal('SUM(desafio01 + desafio02 + desafio03 + desafio04 + desafio05 + desafio06 + desafio07)'), 'total'],[db.sequelize.literal('createdAt'), 'inicio'],[db.sequelize.literal('updatedAt'), 'fin']],
            group : ['User.id'],
            raw: true,
            order: sequelize.literal('total DESC'),
            limit: 20
          })
        .then(response => {
         

            let result = response.map( user => {
                let minutos = Math.round(((Date.parse(user.fin) - Date.parse(user.inicio))/1000)/60)

                if (isNaN(minutos)){
                    minutos = 0
                }
                return {
                    id: user.id,
                    name: user.name,
                    total: (user.total + minutos)
                  }
            })

            
            function compare(a, b) {
                // Use toUpperCase() to ignore character casing
                const userA = Number(a.total)
                const userB = Number(b.total)
              
                let comparison = 0;
                if (userA > userB) {
                  comparison = -1;
                } else if (userA < userB) {
                  comparison = 1;
                }
                return comparison;
              }
              
              result.sort(compare);

                // res.send(result)
                res.render("ranking", {result})
            }

        )
        .catch(error => console.log(error));
    },

    comments: (req, res) => {
            
        db.Comment.create({
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment,				
        })
        .then(productSaved => {
            
            res.redirect('/graciastotales');
        })
        .catch(error => console.log(error));     
        
    },
	form: (req, res) => {
        
        res.render('form')
	},
     pepinito: (req, res) => {

        let usuarios = 
             db.User.findAll({
             raw: true,
             order: sequelize.literal('id DESC')
           })
        
        let comentarios = db.Comment.findAll()

        Promise.all([usuarios, comentarios])

         .then(function([usuarios, comentarios]) {
                
                // res.send(result)
                res.render('pepinito', {result : usuarios, comentarios: comentarios})
             }
 
         )
         .catch(error => console.log(error));
 
 
     },
     marioPrueba: (req, res)=>{
         res.render('mario')
     }

}

module.exports = controller;