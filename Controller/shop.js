
const Product = require('../models/product')



  exports.getProducts = (req, res, next) => {
    Product.fetchAll((products)=>{
      res.render("shop/product-list", {
        prods: products,
        PageTitle: "All Products",
        path: "/products",
      });
    });
    
     //this is where we are using the template engine and we dont have to
    //define the location and the type because we already defined it in the
    //app.js file to which type of template we are using and where is the location
    //of the file with the help of app.set
  
    // console.log('shop.js', adminData.products);
    // res.sendFile(path.join(rootDir,'views', 'shop.html'));
  }

  exports.getProduct = (req, res, next) =>{
    const prodId = req.params.productId;
    Product.findById(prodId, product =>{
      console.log(product);
    })
    res.redirect('/');
  }

  exports.getIndex = (req, res, next) => {
    Product.fetchAll((products)=>{
      res.render("shop/index", {
        prods: products,
        PageTitle: "Shop",
        path: "/",
      });
    });
  }

  exports.getCart = (req, res, next) =>{
    res.render('shop/cart', {
      path: '/cart',
      PageTitle:'Your Cart'
    })
  }

  exports.getOrders = (req, res, next) =>{
    res.render('shop/orders', {
      path: '/orders',
      PageTitle:'Your Orders'
    })
  }

  exports.getCheckout = (res, req, next) =>{
    res.render('shop/checkout', {
      path:'/checkout',
      PageTitle: 'Checkout'
    })
  }

  