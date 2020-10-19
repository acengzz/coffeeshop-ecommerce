const express = require('express');
const dotenv = require("dotenv")
const connectDB = require("./config/DB.js");
const productRoutes = require("./routes/ProductRoutes");
const userRoutes = require("./routes/UserRouter");
const {notFound,errorHandler} = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();
const MODE = process.env.NODE_ENV

app.use(express.json());
app.use("/api/products",productRoutes);
app.use("/api/users",userRoutes);
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT;
app.listen(PORT || 5000, 
	console.log(`Server is on ${MODE} mode and running on port http://localhost:${PORT}`)
);