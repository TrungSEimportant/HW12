const express = require("express");
const router = express.Router();

const {
    createCategory,
    getCategories,
    updatecategory,
    deleteCategory,
    
} = require("../controllers/category.controller");

router 
    .route("/")
    .post(createCategory)
    .get(getCategories);

router
    .route("/:id")
    .patch(updatecategory)
    .delete(deleteCategory);

module.exports = router;
