const router = require('express').Router();

const {
    addProduct,
    getOneProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

const upload = require('../middleware/multer');
router.post('/product', upload.single('productImage'), addProduct);
router.get('/product/:id', getOneProduct);
router.get('/products', getAllProducts);
router.patch('/product/:id', upload.single('productImage'), updateProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router;