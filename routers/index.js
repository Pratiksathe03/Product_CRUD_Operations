const express = require("express");
const router = express.Router();

const produtdetails=require('../controller/productdetails.controller.js');
const categorymaster = require("../controller/categorymaster.controller.js");

router.get("/categorylist", categorymaster.getCategoryMasterDetails);
router.post("/createcategory", categorymaster.createCategoryMasterDetails);
router.put("/updatecategory", categorymaster.updateCategoryMasterDetails);

router.get("/productlist", produtdetails.getProductDetails);
router.post("/createproduct", produtdetails.createProductDetails);
router.put("/updateproduct", produtdetails.updateProductDetails);

module.exports = router;
