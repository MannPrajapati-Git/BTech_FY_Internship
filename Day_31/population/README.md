# 🚀 Mongoose Populate Project

## Category & SubCategory API with Populate

### Setup
```bash
npm install
npm run dev
```

### API Endpoints

#### Category
| Method | URL | Description |
|--------|-----|-------------|
| POST   | /api/category/add | Create category |
| GET    | /api/category/all | Get all categories |
| GET    | /api/category/:id | Get single category |
| PUT    | /api/category/update/:id | Update category |
| DELETE | /api/category/delete/:id | Delete category |

#### SubCategory
| Method | URL | Description |
|--------|-----|-------------|
| POST   | /api/subcategory/add | Create subcategory |
| GET    | /api/subcategory/all | Get all (populated) |
| GET    | /api/subcategory/:id | Get single (populated) |
| GET    | /api/subcategory/category/:categoryId | Get by category |
| PUT    | /api/subcategory/update/:id | Update subcategory |
| DELETE | /api/subcategory/delete/:id | Delete subcategory |

### Postman Body Examples

**Create Category:**
```json
{ "category_name": "Electronics" }
```

**Create SubCategory:**
```json
{ "sub_category_name": "Mobile Phones", "_category": "PASTE_CATEGORY_ID_HERE" }
```
