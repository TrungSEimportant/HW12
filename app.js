const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/food.router");

const app = express();

// Middleware xử lý JSON
app.use(express.json());

// Kết nối MongoDB
mongoose.connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB:", err));

// Sử dụng router
app.use("/api/foods", foodRouter);

// Khởi động server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
