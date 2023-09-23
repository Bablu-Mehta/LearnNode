const path = require("path");

const express = require("express");

const adminController = require("../Controller/admin");

const router = express.Router();


router.get("/add-product", adminController.getAddProducts);

router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProduct);

module.exports = router;
