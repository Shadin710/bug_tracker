const router = require('express').Router();
const express = require('express');

const {check,validationResult} = require('express-validator');
const bodyParser = require('body-parser');
const path =  require('path');

router.use(express.static(path.join(__dirname+'./../views')));

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/',(req,res)=>{
    res.render('index');
});


module.exports =  router;