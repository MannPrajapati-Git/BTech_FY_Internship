const express = require('express');
const router = express.Router();
const {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
} = require('../controllers/categoryController');

// POST   /api/category/add
router.post('/add', createCategory);

// GET    /api/category/all
router.get('/all', getAllCategories);

// GET    /api/category/:id
router.get('/:id', getCategoryById);

// PUT    /api/category/update/:id
router.put('/update/:id', updateCategory);

// DELETE /api/category/delete/:id
router.delete('/delete/:id', deleteCategory);

module.exports = router;
