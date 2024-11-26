const categoryModel = require("../models/category.model")

module.exports = {
    createCategory: async (req, res) => {
        const body = req.body;
        const newCategory = await categoryModel.create(body);
        return res.status(201).json(newCategory);
    },
    getCategories : async (req, res) => {
        const categories = await categoryModel.find();
        return res.status(200).json(categories);
    },
    updatecategory: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const updatecategory = await categoryModel.findByIdAndUpdate(id, body, {new:true});
        return res.status(200).json(updatecategory);
    },
    deleteCategory: async(req,res) => {
        const id = req.params.id;
        const deleteCategory = await categoryModel.findByIdAndDelete(id);
        return res.status(200).json(deleteCategory);
    }

}