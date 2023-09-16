const path = require("path");

const express = require("express");

const productController = require("../Controller/products");

const router = express.Router();


router.get("/add-product", productController.getAddProducts);

router.post("/add-product", productController.postAddProduct);

module.exports = router;
