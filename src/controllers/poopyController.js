//require modules

const axios = require('axios');
const fs = require('fs');
const db = require('../database/models')



const controller = {

	poopy:(req, res) => {
        
        res.render('poopy')
	

	},
	poopyStore: (req, res) => {

        
	// Make a request for a user with a given ID
        axios.get('https://rickandmortyapi.com/api/character/244')
        .then(function (response) {
        // handle success
        let episodeQty = response.data.episode.length

        if (req.body.episodes == episodeQty){
            res.render('hooray01' )
        } else {
            res.render('wrong_answer', {pista: "RTFM! Si, hay que leer la Doc de la API"})
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
        
        let success = {
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
                answer: "https://result310516842.herokuapp.com/marioresults?search_query={answer}"
            },
            your_face: "🤔",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Left: "ArrowLeft",
            Right: "ArrowRight",

        }

        if (req.body.spanword == "SuckiT"){
            res.send(success)
        } else {
            res.send("Try again")
        }
        
    },
    mario: (req, res) => {

        if(req.query.search_query == "53"){

            res.render('hooray02')
        } else {
            res.render('wrong_answer')
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

            res.render("hooray03")

        }else{

            res.render("toobad")
        }
        
    },
    ultimate:  (req, res) => {
  
        if(req.body.ultimate == "42"){
            res.render('ultimate')
        } else {
            res.send('Perdiste')
        }
    },
   /*  pepinito: (req, res) => {



    }, */

    gladiola: (req, res) => {

        res.render("gladiola")
    },
    javascript: (req, res) => {

        res.render("noscript")
    },
    violet: (req, res) => {

        res.render("violet")
    },
    amarillo: (req, res) => {

        res.render("amarillo")
    },
    amarilloAnswer: (req, res) => {

        // esto viene de // 
            
            let answer = req.body.respuestaAmarillo

            if (answer.toLowerCase() == "bgh"){
            
                // res.redirect('/poopy');
                res.render("comments")
            }else{
                res.render('wrong_answer', {pista: "reliquias, espadas y episodios"})
            }
        
            
    },
    comments: (req, res) => {
            
        db.Comment.create({
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment,				
        })
        .then(productSaved => {
            
            res.send('Comentario enviado');
        })
        .catch(error => console.log(error));     
        
    },
	form: (req, res) => {
        // busco todas las veces que se resolvio un Mario
        // let all = getAllVisitors();

        // let allPoopy = ""
        // let allSpan = ""
        // let allMario = ""
        // let allSimpson = ""
        // let allUltimate = ""

        // for (let i = 0; i < all.length; i++){
        //     if(all[i].poopy){
        //         allPoopy ++
        //     } else if(all[i].span){
        //         allSpan ++
        //     } else if(all[i].mario){
        //         allMario ++
        //     } else if(all[i].simpson){
        //         allSimpson ++
        //     } 
        //     else if(all[i].ultimate){
        //         allUltimate ++
        //     } 
        // }

        
        // let results = {
        //     poopy: allPoopy,
        //     span: allSpan,
        //     mario: allMario,
        //     simpson: allSimpson,
        //     ultimate: allUltimate
        // }

		// res.send(results)
        res.render('form')
	}

}

module.exports = controller;