const express = require('express');

var router = express.Router();

var osoba = {
	'imie':"Staszek",
	'nazwisko':"Olejnik"
}

router.get('/',function(req,res) {
	res.render('home',osoba);
});

module.exports = router;
