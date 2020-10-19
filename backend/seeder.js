/*
#############################################################################
########### THIS IS NOT ABOUT THE APP, ONLY SEEDS DATA TO MONGODB ###########
########### THIS IS NOT ABOUT THE APP, ONLY SEEDS DATA TO MONGODB ###########
########### THIS IS NOT ABOUT THE APP, ONLY SEEDS DATA TO MONGODB ###########
########### THIS IS NOT ABOUT THE APP, ONLY SEEDS DATA TO MONGODB ###########
########### THIS IS NOT ABOUT THE APP, ONLY SEEDS DATA TO MONGODB ###########
########### THIS IS NOT ABOUT THE APP, ONLY SEEDS DATA TO MONGODB ###########
########### THIS IS NOT ABOUT THE APP, ONLY SEEDS DATA TO MONGODB ###########
########### THIS IS NOT ABOUT THE APP, ONLY SEEDS DATA TO MONGODB ###########
#############################################################################
*/

const mongoose =require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const products = require("./data/products");
const User = require("./models/UserModel");
const Product = require("./models/ProductModel");
const Order = require("./models/OrderModel");
const connectDB = require('./config/DB');

dotenv.config();
connectDB();

const importData = async () => {
	try {
		await Order.deleteMany();
		await User.deleteMany();
		await Product.deleteMany();

		const createdUsers = await User.insertMany(users);

		const adminUser = createdUsers[0]._id;

		const sampleProducts = products.map(product=> {
			return {...product,user:adminUser}
		})

		await Product.insertMany(sampleProducts);

		console.log("data imported");
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
}

const destroyData = async () => {
	try {
		await Order.deleteMany();
		await User.deleteMany();
		await Product.deleteMany();

		console.log("data destroyed");
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
}


if(process.argv[2] === "-d"){
	destroyData();
}else{
	importData();
}