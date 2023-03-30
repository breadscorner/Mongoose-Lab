const router = require('express').Router();

router.get('/', async (req, res) => {
	console.log("page hit");
	try {
		console.log("Test");
		res.render('index', {message: "This is Awesome!"});
	}
	catch(ex) {
		res.render('error', {message: 'Error'});
		console.log("Error");
		console.log(ex);
	}
});

module.exports = router;
