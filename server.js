const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen();
require('./app/routes/book.routes.js')(app);

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {useNewUrlParser: true})
    .then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });






app.get('/', (req, res) => {
    res.json({"message": "Welcome to Expertizo student."});
});




















app.listen(3000, () => {
    console.log("your local express server 3000 has been run, plesae check on web")
});