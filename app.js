const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");



const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set('view engine', 'ejs');//where to compile the dynamic template
app.set('views', 'views');

//app.set('view engine', 'pug');//where to compile the dynamic template
//app.set('views', 'views');//and here we tell where to find the templates

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminData.routes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).render('404', {PageTitle:'Page Not Found', path:''});;
});

app.listen(3000);
