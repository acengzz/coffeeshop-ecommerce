const userRoutes = require('express').Router();
const {protect} = require("../middleware/authMiddleware");
const {
	authUser,getUserProfile,registerUser
} = require("../controllers/UserController");

userRoutes
.post("/",registerUser)
.post("/login",authUser)
.get("/profile",protect,getUserProfile)
module.exports = userRoutes