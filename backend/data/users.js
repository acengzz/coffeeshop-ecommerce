const bcryptjs = require("bcryptjs");
const users = [
	{
		name:"Admin User",
		email:"admin@example.com",
		password:bcryptjs.hashSync('123456',10),
		isAdmin:true
	},
	{
		name:"John Doe",
		email:"johndoe@example.com",
		password:bcryptjs.hashSync('123456',10),
	},
	{
		name:"Jane Doe",
		email:"janedoe@example.com",
		password:bcryptjs.hashSync('123456',10),
	}
]

module.exports = users;