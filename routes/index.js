const express= require('express');

//we call the actions through this controler
const controler = require('../controler/homecontroler');

//this is library for distributing routes
const router = express.Router()

//call all the actions based on the url
router.get('/',controler.home);
router.get('/delete',controler.delete);
router.post('/create-list',controler.create);

//export the router to use globally
module.exports = router;