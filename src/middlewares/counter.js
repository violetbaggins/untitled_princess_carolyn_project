function counter (req, res, next) {

    // console.log("original URL", req.originalUrl);

/*     let inicio = 0;
    let mellon = 0;
    let poopy = 0;
    let span = 0;
    let mario = 0;
    let simpson = 0;
    let vida = 0;
    let ultimate = 0;

    if(req.originalUrl == '/'){
        inicio ++
        console.log("counter inicio:", inicio);
    }

    if(req.originalUrl == '/poopy'){
        mellon ++
        console.log("counter mellon:", mellon);
    }
    if(req.originalUrl == '/span'){
        poopy ++
        console.log("counter poopy:", poopy);
    }
    if(req.originalUrl == '/marioresults?search_query=53'){
        span ++
        console.log("counter span:", span);
    }
 */
    

    next();
    
}

module.exports = counter;