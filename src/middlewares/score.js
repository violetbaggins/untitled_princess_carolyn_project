function score (req, res, next) {

  res.locals.user = req.session.user;
  console.log("Console log de locals User a ver cuando muere", res.locals.user);
   
    next();
    
}

module.exports = score;