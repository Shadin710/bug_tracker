const express= require('express');
const app  = express();
const bodyParser =  require('body-parser');
const morgan = require('morgan');
const path =  require('path');


const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname +'./views')));

app.set('view engine','ejs');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('index');
});


app.listen(port,()=>{
    console.log(`Listeing to ${port}....`);
});


