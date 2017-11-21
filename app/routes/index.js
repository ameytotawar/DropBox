var express = require('express');
var router = express.Router();
var ctrls = require('../controllers/login.controllers.js');

router
    .route('/login')
    .get(ctrls.loginGetView);
    
router
    .route('/signup')
    .get(ctrls.signupGetView);  
    
router
    .route('/templogin')
    .post(ctrls.loginGetCred);    
    
router
    .route('/regsuccess')
    .post(ctrls.signupGetCred);     

module.exports = router;