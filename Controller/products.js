
const Product = require('../models/product')

exports.getAddProducts = (req, res, next) => {
    res.render("add-product", {
      PageTitle: "Add Product",
      path: "/admin/add-product",
      activeAddProduct:true,
      formsCSS:true,
      productCSS:true
    });
  }

  exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
  }

  exports.getProducts = (req, res, next) => {
    Product.fetchAll((products)=>{
      res.render("shop", {
        prods: products,
        PageTitle: "Shop",
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
    
     //this is where we are using the template engine and we dont have to
    //define the location and the type because we already defined it in the
    //app.js file to which type of template we are using and where is the location
    //of the file with the help of app.set
  
    // console.log('shop.js', adminData.products);
    // res.sendFile(path.join(rootDir,'views', 'shop.html'));
  }

