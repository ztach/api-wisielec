exports.notFound = (req,res,next) => {
    const err = new Error('404 page not found');
    err.status = 404;
    next(err);
    //res.status(404).render('404');
}


exports.catchAsych = (fn) => {
    return (req, res, next) => {
        fn(req,res, next).catch(err => next(err));
    }
}

exports.catchErrors = (err,req,res,next) => {
    res.status(err.status || 500);
    res.render('error',{
        message:err.message,
        titlePage:'brak strony'
    })
}