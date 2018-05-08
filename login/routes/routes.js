var express = require('express');
var router = express.Router();
let controllers = require('.././controllers');
let mysql = require('mysql');


router.get('/', controllers.homeController.index);

// rutas de usuario ------------------------------------------------------------------
router
      .get('/users/signup', (req, res)=>{
        return res.render('users/signup');
      });
// rutas de usuario ------------------------------------------------------------------


module.exports = router;
