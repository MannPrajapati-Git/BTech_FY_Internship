const express = require('express');
const router = express.Router();
const {
    createSubCategory,
    getAllSubCategories,
    getSubCategoryById,
    getSubCategoriesByCategoryId,
    updateSubCategory,
    deleteSubCategory,
} = require('../controllers/subCategoryController');

// POST   /api/subcategory/add
router.post('/add', createSubCategory);

// GET    /api/subcategory/all
router.get('/all', getAllSubCategories);

// GET    /api/subcategory/category/:categoryId
router.get('/category/:categoryId', getSubCategoriesByCategoryId);

// GET    /api/subcategory/:id
router.get('/:id', getSubCategoryById);

// PUT    /api/subcategory/update/:id
router.put('/update/:id', updateSubCategory);

// DELETE /api/subcategory/delete/:id
router.delete('/delete/:id', deleteSubCategory);

module.exports = router;
