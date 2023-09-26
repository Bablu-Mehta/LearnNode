const Product = require('../models/product')


exports.getAddProducts = (req, res, next) => {
    res.render("admin/add-product", {
      PageTitle: "Add Product",
      path: "/admin/add-product",
      activeAddProduct:true,
      formsCSS:true,
      productCSS:true
    });
  }

  exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect("/");
  }

  exports.getProducts = (req, res, next) => {
    Product.fetchAll((products)=>{
    res.render("admin/products", {
      prods: products,
      PageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
}