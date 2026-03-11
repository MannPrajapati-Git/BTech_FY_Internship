const SubCategory = require('../models/SubCategory');

// CREATE SubCategory
const createSubCategory = async (req, res) => {
    try {
        const { sub_category_name, _category } = req.body;

        if (!sub_category_name || !_category) {
            return res.status(400).json({
                success: false,
                message: 'sub_category_name and _category are required',
            });
        }

        const subCategory = new SubCategory({
            sub_category_name,
            _category,
        });

        const savedSubCategory = await subCategory.save();

        res.status(201).json({
            success: true,
            message: 'SubCategory created successfully',
            data: savedSubCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating subcategory',
            error: error.message,
        });
    }
};

// GET All SubCategories (WITH POPULATE)
const getAllSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find().populate('_category');

        res.status(200).json({
            success: true,
            count: subCategories.length,
            data: subCategories,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching subcategories',
            error: error.message,
        });
    }
};

// GET Single SubCategory by ID (WITH POPULATE)
const getSubCategoryById = async (req, res) => {
    try {
        const subCategory = await SubCategory.findById(req.params.id).populate('_category');

        if (!subCategory) {
            return res.status(404).json({
                success: false,
                message: 'SubCategory not found',
            });
        }

        res.status(200).json({
            success: true,
            data: subCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching subcategory',
            error: error.message,
        });
    }
};

// GET SubCategories by Category ID (WITH POPULATE)
const getSubCategoriesByCategoryId = async (req, res) => {
    try {
        const subCategories = await SubCategory.find({
            _category: req.params.categoryId,
        }).populate('_category');

        res.status(200).json({
            success: true,
            count: subCategories.length,
            data: subCategories,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching subcategories by category',
            error: error.message,
        });
    }
};

// UPDATE SubCategory
const updateSubCategory = async (req, res) => {
    try {
        const updatedSubCategory = await SubCategory.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).populate('_category');

        if (!updatedSubCategory) {
            return res.status(404).json({
                success: false,
                message: 'SubCategory not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'SubCategory updated successfully',
            data: updatedSubCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating subcategory',
            error: error.message,
        });
    }
};

// DELETE SubCategory
const deleteSubCategory = async (req, res) => {
    try {
        const deletedSubCategory = await SubCategory.findByIdAndDelete(req.params.id);

        if (!deletedSubCategory) {
            return res.status(404).json({
                success: false,
                message: 'SubCategory not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'SubCategory deleted successfully',
            data: deletedSubCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting subcategory',
            error: error.message,
        });
    }
};

module.exports = {
    createSubCategory,
    getAllSubCategories,
    getSubCategoryById,
    getSubCategoriesByCategoryId,
    updateSubCategory,
    deleteSubCategory,
};
