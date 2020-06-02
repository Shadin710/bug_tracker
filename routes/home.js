const router = require('express').Router();
const express = require('express');

const {check,validationResult} = require('express-validator');
const bodyParser = require('body-parser');
const path =  require('path');
const bcrypt = require('bcryptjs');
const user = require('./../models/user');
router.use(express.static(path.join(__dirname+'./../views')));

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.post('/',
[
    check('username').not().isEmpty().trim().escape(),
    check('pass').not().isEmpty().trim().escape()
],(req,res)=>{

    //validation check
    const error =  validationResult(req);
    if(!error.isEmpty())
    {
        return res.json({
            status: false,
            message: 'Validation error in login',
            error:error
        });
    }


    //everything is good 

    user.findOne({username: req.body.username},(error,result)=>{

        if(error)
        {
            return res.json({
                status: false,
                message: 'Error in finding the data',
                error: error
            });
        }

        //no error in finding the data
        if(result)
        {
            let isMatch =  bcrypt.compareSync(req.body.pass,result.password);
            if(isMatch)
            {
                res.render('index');
            }
            else
            {
                //redirects to login page
                res.redirect('/');
            }
        }
        else
        {
            res.redirect('/');
        }
    });
});


module.exports =  router;