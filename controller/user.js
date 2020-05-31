const router =  require('express').Router();
const express =  require('express');
const path = require('path');
const user =  require('./../models/user');
const bcrypt =  require('bcryptjs');
const bodyParser = require('body-parser');
const {check, validationResult}= require('express-validator');

router.use(express.static(path.join(__dirname+ './../views')));

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/',
[
    check('first').not().isEmpty().trim().escape(),
    check('last').not().isEmpty().trim().escape(),
    check('username').not().isEmpty().trim().escape(),
    check('email').isEmail().normalizeEmail(),
    check('pass').not().isEmpty().trim().escape()
],
(req,res)=>{


    const error =  validationResult(req);

    if(!error.isEmpty())
    {
        res.json({
            status: false,
            message: "Validation error",
            error: error
        });
    }

    //no error
    const hashed =  bcrypt.hashSync(req.body.pass,10);

    user.create(
    {
        first_name: req.body.first,
        last_name: req.body.last,
        username: req.body.username,
        email: req.body.email,
        password: hashed
    },
    (error,result)=>{
        if(error)
        {
            res.json({
                status: false,
                message: "Error in inserting the data",
                error: error
            });
        }

        //everything is good
        res.redirect('/');
    } );
});


module.exports =  router;