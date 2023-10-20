const Product = require("../models/product");
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
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
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("shop/product-detail", {
      product: product,
      PageTitle: product.title,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      PageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart =>{
    Product.fetchAll(products =>{
      const cartProducts = [];
      for (const product of products){
        const cartProductData = cart.products.find(prod => prod.id === product.id);
        if(cartProductData)
        {
          cartProducts.push({prodcutData: product, qty: cartProductData.qty});
        }
      }
      res.render("shop/cart", {
        path: "/cart",
        PageTitle: "Your Cart",
        products: cartProducts
      });
    });
    
  });
 
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
 Product.findById(prodId, (product)=>{
    Cart.addProduct(prodId, product.price);
 })
  res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    PageTitle: "Your Orders",
  });
};

exports.getCheckout = (res, req, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    PageTitle: "Checkout",
  });
};
