const express = require('express');
const router = express.Router();
const db = require('../controllers/booksController');

router.get('/', (req, res) => {

    //res.render('employeesRoutes', {title: 'TeamWork-ISNetwork App'}); 
     res.send(JSON.stringify({Hello: 'Book World!'}))
});



   
   module.exports = router;