const express= require('express');
const app  = express();
const bodyParser =  require('body-parser');
const morgan = require('morgan');
const path =  require('path');
const home =  require('./routes/home');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'./views')));

app.set('view engine','ejs');
app.set('views','./views');

app.use(morgan('dev'));


app.get('/',(req,res)=>{
    res.render('log');
});
app.use('/homepage',home);


app.listen(port,()=>{
    console.log(`Listeing to ${port}....`);
});


