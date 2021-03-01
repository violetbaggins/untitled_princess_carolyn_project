//require modules

const axios = require('axios');
const fs = require('fs');
const db = require('../database/models')

const visitorsFilePath = __dirname + '/../data/visitors.json';
const visitors = JSON.parse(fs.readFileSync(visitorsFilePath, 'utf-8'));

function getAllVisitors () {
	let visitorsFileContent = fs.readFileSync(visitorsFilePath, 'utf-8');
	let finalVisitors = visitorsFileContent == '' ? [] : JSON.parse(visitorsFileContent); 
	return finalVisitors;
}


function storeVisitor (newVisitorData) {
	let allVisitors = getAllVisitors();
	allVisitors.push(newVisitorData);
	fs.writeFileSync(visitorsFilePath, JSON.stringify(allVisitors, null, ' '));
}


const controller = {

	poopy:(req, res) => {
        
        res.render('poopy')
	

	},
	poopyStore: (req, res) => {

        // Sumo 1 a los que pasaron el desafio
		let userFinalData = {
            poopy: "Poopy Resuelto"
        };
        storeVisitor(userFinalData);

        // saco la cuenta de cuantos lo resolvieron

        let all = getAllVisitors();

        let allPoopy = ""

        for (let i = 0; i < all.length; i++){
            if(all[i].poopy){
                allPoopy ++
            } else {
                // console.log("no hay poopys");
            }
        }

        // console.log("todos los Poopy", allPoopy );


	// Make a request for a user with a given ID
        axios.get('https://rickandmortyapi.com/api/character/244')
        .then(function (response) {
        // handle success
        let episodeQty = response.data.episode.length

        if (req.body.episodes == episodeQty){
            res.render('hooray01', {allPoopy})
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

        let all = getAllVisitors();

        let allSpan = ""

        for (let i = 0; i < all.length; i++){
            if(all[i].span){
                allSpan ++
            } else {
                
            }
        }
     

        res.render('span', {allSpan})
    },
    spanStore: (req, res) => {

        let userFinalData = {
            span: "Span Resuelto"
        };
        storeVisitor(userFinalData);
        
        let success = {
            status: 200,
            traduccion: "ganaste",
            you_win:{
                second_code: 68,
                message: "SAVE YOUR CODE FOR LATER"
            },
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
        
        // suma una resolvida
        let userFinalData = {
            mario: "Mario Resuelto"
        };
        storeVisitor(userFinalData);

        // busco todas las veces que se resolvio un Mario
        let all = getAllVisitors();

        let allMario = ""

        for (let i = 0; i < all.length; i++){
            if(all[i].mario){
                allMario ++
            } 
        }
        
        

        if(req.query.search_query == "53"){

            res.render('hooray02', {allMario})
        } else {
            res.render('wrong_answer')
        }
	

    },
    simpson: (req, res) => {
              
        let all = getAllVisitors();

        let allSimpson = ""

        for (let i = 0; i < all.length; i++){
            if(all[i].simpson){
                allSimpson ++
            } 
        }
            res.render('simpson', {allSimpson})
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

                let userFinalData = {
                    simpson: "Simpson Resuelto"
                };
                storeVisitor(userFinalData);

                 // busco todas las veces que se resolvio un Mario
                let all = getAllVisitors();

                let allUltimate = ""

                for (let i = 0; i < all.length; i++){
                    if(all[i].ultimate){
                        allUltimate ++
                    } 
                }
        

            res.render("hooray03", {allUltimate})

        }else{

            res.render("toobad")
        }
        
    },
    ultimate:  (req, res) => {

      
        
      
        
        if(req.body.ultimate == "42"){

            let userFinalData = {
                ultimate: "Ultimate Resuelto"
            };
            storeVisitor(userFinalData);

                // busco todas las veces que se resolvio un Mario
                let all = getAllVisitors();

                let allUltimate = ""

                for (let i = 0; i < all.length; i++){
                    if(all[i].ultimate){
                        allUltimate ++
                    } 
                }

            res.render('ultimate', {allUltimate})
        } else {
            res.send('Perdiste')
        }
    },
    pepinito: (req, res) => {

        
        // Make a request for a user with a given ID
        axios.get('https://ipapi.co/json/')
        
        .then( function (response) {
			
			console.log("--------INFO------------");
			console.log(response.data.ip);
			console.log(response.data.city);
			console.log(response.data.country_name);
			
		})

		.catch (error =>{
			console.log(error.response)
		});

        let code = (req.body.codigo01+req.body.codigo02+req.body.codigo03+req.body.codigo04+req.body.codigo05)
        console.log("1 visita a Ultimate fijarse si escribio!!!!");

        if (code ==""){
            res.render('wrong_answer', {pista: "Y si probas de nuevo?"})
        }else{

            // res.redirect(``)
            res.render("amarillo")
        }

    },
    amarillo: (req, res) => {
            
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
        let all = getAllVisitors();

        let allPoopy = ""
        let allSpan = ""
        let allMario = ""
        let allSimpson = ""
        let allUltimate = ""

        for (let i = 0; i < all.length; i++){
            if(all[i].poopy){
                allPoopy ++
            } else if(all[i].span){
                allSpan ++
            } else if(all[i].mario){
                allMario ++
            } else if(all[i].simpson){
                allSimpson ++
            } 
            else if(all[i].ultimate){
                allUltimate ++
            } 
        }

        
        let results = {
            poopy: allPoopy,
            span: allSpan,
            mario: allMario,
            simpson: allSimpson,
            ultimate: allUltimate
        }

		res.send(results)
	}

}

module.exports = controller;