const path = require("path");

const express = require("express");

const adminController = require("../Controller/admin");
const rootDir = require("../util/path");

const router = express.Router();


router.get("/add-product", adminController.getAddProducts);

router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProducts);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    PageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({ Title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
