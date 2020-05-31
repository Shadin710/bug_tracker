require('dotenv').config();
const express= require('express');
const app  = express();
const bodyParser =  require('body-parser');
const morgan = require('morgan');
const path =  require('path');
const home =  require('./routes/home');
const database =  require('./database');
const create =  require('./controller/user');
const port = process.env.PORT || 3000;
const mongoose =  require('mongoose');
app.use(express.static(path.join(__dirname,'./views')));

app.set('view engine','ejs');
app.set('views','./views');

app.use(morgan('dev'));

//some landing page  
app.get('/',(req,res)=>{
    res.render('log');
});
app.get('/register',(req,res)=>{
    res.render('reg');
});
//end
 
//main api 
app.use('/homepage',home);
app.use('/create',create);



//starting the server 
app.listen(port,()=>{
    console.log(`Listeing to ${port}....`);
});
//end

