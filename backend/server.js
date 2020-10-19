const express = require('express');
const dotenv = require("dotenv")
const connectDB = require("./config/DB.js");
const productRoutes = require("./routes/ProductRoutes");
const {notFound,errorHandler} = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();
const MODE = process.env.NODE_ENV

app.use("/api/products",productRoutes);
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT;
app.listen(PORT || 5000, 
	console.log(`Server is on ${MODE} mode and running on port http://localhost:${PORT}`)
);