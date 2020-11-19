const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('customer/login');	
});

module.exports = router;