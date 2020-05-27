const mongoose =  require('mongoose');
const userSchema =  mongoose.Schema({
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    username:{
        type:String,
        require: true,
        unique: true
    },
    email:{
        type:String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    }
});

mongoose.model('register',userSchema);

module.exports = mongoose.model('register');