const asyncHandler = require("express-async-handler");
const Product = require("../models/ProductModel");

/*
	@desc	FETCH ALL PRODUCTS
	@route	/api/products @GET
	@access /PUBLIC
*/
const getAllProducts = asyncHandler(async (req,res)=>{
	const products = await Product.find({})

	res.json(products);
})

/*
	@desc	FETCH SINGLE PRODUCT
	@route	/api/products/:id @GET
	@access /PUBLIC
*/
const getSingleProductbyId = asyncHandler( async (req,res)=>{
	const product = await Product.findById(req.params.id);

	if(product){
		res.json(product);
	}else{
		res.status(404)
		throw new Error(`Product not found.`);
	}
})

module.exports = {getAllProducts, getSingleProductbyId}