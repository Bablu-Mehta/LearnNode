const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const expressHBS = require("express-handlebars")



const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();


app.engine('handlebars', expressHBS({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'handlebars'})) //now this not a build-in template as pug thats why we are using this sytax for express to know what engines it should use

app.set('view engine', 'handlebars');//where to compile the dynamic template
app.set('views', 'views');

//app.set('view engine', 'pug');//where to compile the dynamic template
//app.set('views', 'views');//and here we tell where to find the templates

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminData.routes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).render('404', {PageTitle:'Page Not Found'});;
});

app.listen(3000);
