const userRoutes = require('express').Router();
const {protect} = require("../middleware/authMiddleware");
const {
	authUser,getUserProfile,registerUser,updateUserProfile
} = require("../controllers/UserController");

userRoutes
.post("/",registerUser)
.post("/login",authUser)
.get("/profile",protect,getUserProfile)
.put("/profile",protect, updateUserProfile)

module.exports = userRoutes