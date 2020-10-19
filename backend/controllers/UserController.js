const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const generateToken = require("../utils/generateToken")

/*
	@desc	AUTH USER & GET TOKEN
	@route	/api/users/login @POST
	@access /PUBLIC
*/
const authUser = asyncHandler(async (req,res)=>{
	const {email,password} = req.body;

	const user = await User.findOne({email})

	if(user && (await user.matchPassword(password))){
		res.json({
			_id:user._id,
			name:user.name,
			email:user.email,
			isAdmin:user.isAdmin,
			token:generateToken(user._id)
		})
	}else{
		res.status(401)
		throw new Error(`Invalid email (${email}) or password. Try again.`);
	}
})

/*
	@desc	GET USER PROFILE
	@route	/api/users/profile @GET
	@access /PRIVATE
*/
const getUserProfile = asyncHandler(async (req,res)=>{
	const user = await User.findById(req.user._id);
	if(user){
		res.json({
			_id:user._id,
			name:user.name,
			email:user.email,
			isAdmin:user.isAdmin,
		})
	}else{
		res.status(404)
		throw new Error("User not found.");
	}
})

/*
	@desc	REGISTER A NEW USER
	@route	/api/users/ @POST
	@access /PUBLIC
*/
const registerUser = asyncHandler(async (req,res)=>{
	const {name,email,password} = req.body;

	const userExists = await User.findOne({email})

	if(userExists){
		res.status(400)
		throw new Error("Zaten böyle bir kullanıcı var, başka bir email seç.");
	}

	const user = await User.create({
		name,
		email,
		password
	})

	if(user){
		res.status(201).json({
			_id:user._id,
			name:user.name,
			email:user.email,
			isAdmin:user.isAdmin,
			token:generateToken(user._id)
		})
	}else{
		res.status(400)
		throw new Error("Bir şeyler hatalı gitti. Tekrar dene.")
	}
})

module.exports = {authUser,getUserProfile,registerUser}