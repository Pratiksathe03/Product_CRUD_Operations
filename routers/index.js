const express = require("express");
const router = express.Router();

// const produtdetails=require('../controller/produtdetails.controller.js');
const categorymaster = require("../controller/categorymaster.controller.js");

// router.post('/updateUser',produtdetails.updateUser);
router.get("/categorylist", categorymaster.getCategoryMasterDetails);
router.post("/createcategory", categorymaster.createCategoryMasterDetails);
router.patch("/updatecategory", categorymaster.updateCategoryMasterDetails);

// router.post('/updateUserScore',user.updateUserTestScore);

module.exports = router;
