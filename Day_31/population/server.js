const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/category', require('./routes/categoryRoutes'));
app.use('/api/subcategory', require('./routes/subCategoryRoutes'));

// Home route
app.get('/', (req, res) => {
    res.json({
        message: '🚀 Populate API is running...',
        endpoints: {
            category: {
                create: 'POST   /api/category/add',
                getAll: 'GET    /api/category/all',
                getOne: 'GET    /api/category/:id',
                update: 'PUT    /api/category/update/:id',
                delete: 'DELETE /api/category/delete/:id'
            },
            subcategory: {
                create: 'POST   /api/subcategory/add',
                getAll: 'GET    /api/subcategory/all',
                getOne: 'GET    /api/subcategory/:id',
                byCategory: 'GET    /api/subcategory/category/:categoryId',
                update: 'PUT    /api/subcategory/update/:id',
                delete: 'DELETE /api/subcategory/delete/:id'
            }
        }
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('');
    console.log('='.repeat(50));
    console.log('🚀 Server running on http://localhost:' + PORT);
    console.log('='.repeat(50));
    console.log('');
    console.log('📌 API Endpoints:');
    console.log('');
    console.log('  CATEGORY:');
    console.log('  POST   http://localhost:' + PORT + '/api/category/add');
    console.log('  GET    http://localhost:' + PORT + '/api/category/all');
    console.log('  GET    http://localhost:' + PORT + '/api/category/:id');
    console.log('  PUT    http://localhost:' + PORT + '/api/category/update/:id');
    console.log('  DELETE http://localhost:' + PORT + '/api/category/delete/:id');
    console.log('');
    console.log('  SUBCATEGORY:');
    console.log('  POST   http://localhost:' + PORT + '/api/subcategory/add');
    console.log('  GET    http://localhost:' + PORT + '/api/subcategory/all');
    console.log('  GET    http://localhost:' + PORT + '/api/subcategory/:id');
    console.log('  GET    http://localhost:' + PORT + '/api/subcategory/category/:categoryId');
    console.log('  PUT    http://localhost:' + PORT + '/api/subcategory/update/:id');
    console.log('  DELETE http://localhost:' + PORT + '/api/subcategory/delete/:id');
    console.log('');
    console.log('='.repeat(50));
});
