const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subCategorySchema = new Schema(
    {
        sub_category_name: {
            type: String,
            required: [true, 'Sub-category name is required'],
            trim: true,
        },
        _category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category',
            required: [true, 'Category reference is required'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('subcategory', subCategorySchema);
