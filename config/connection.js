var mongoose = require('mongoose');
// URL data base
const dbUrl = require('./keys').mongoURI;
// We need to difine the URL
var URL = process.env.URL || dbUrl;

mongoose.set('useCreateIndex', true);

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

//Connection establishment
mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true
});
//Models
// require('../model/user');
var db = mongoose.connection;

//We enebled the Listener
db.on('error', () => {
    console.error('Error occured in db connection');
});

db.on('open', () => {
    console.log('DB Connection established successfully');
});

module.exports = {
    secretOrKey : 'secret'
}