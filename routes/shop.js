const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;

  res.render("shop", {
    prods: products,
    PageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  }); //this is where we are using the template engine and we dont have to
  //define the location and the type because we already defined it in the
  //app.js file to which type of template we are using and where is the location
  //of the file with the help of app.set

  // console.log('shop.js', adminData.products);
  // res.sendFile(path.join(rootDir,'views', 'shop.html'));
});

module.exports = router;
