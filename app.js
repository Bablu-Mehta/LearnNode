const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./Controller/error");

const db = require('./util/database');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();



app.set('view engine', 'ejs');//where to compile the dynamic template
app.set('views', 'views');

//app.set('view engine', 'pug');//where to compile the dynamic template
//app.set('views', 'views');//and here we tell where to find the templates

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use(errorController.get404);

app.listen(3000);
