const mongoose =  require('mongoose');
const assert = require('assert');
const uri =  process.env.URI;

mongoose.connect(
    uri,
    {
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
    }).catch(err=>console.log(err)); 