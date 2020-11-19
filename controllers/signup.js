const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('customer/signup');	
});

module.exports = router;