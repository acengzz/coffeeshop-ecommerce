const productRoutes = require('express').Router();
const {
	getAllProducts,
	getSingleProductbyId
} = require('../controllers/ProductControllers');


productRoutes
.get("/",getAllProducts)
.get("/:id",getSingleProductbyId)

module.exports = productRoutes;