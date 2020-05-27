const mongoose =  require('mongoose');
const assert = require('assert');
const db_url =  process.env.DB_URL;

mongoose.connect(
    db_url,
    {
        useCreateIndex: true,
        useMongoClient: true,
        useUnifiedTopology:true,
        useNewUrlParser:true
    },
    (error,link)=>{
        assert.equal(error,null,'DB connection failed');
        console.log('DB connection established......');
        console.log(link);
    }
);