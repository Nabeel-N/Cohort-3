require('dotenv').config()
const express = require("express");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const app = express();
app.use(cookieParser())
const { userRouter } = require('./Routes/user');
const { courseRouter } = require('./Routes/course');
const { adminRouter } = require('./Routes/admin');


app.use(express.json());


app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main (){
    console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debugging
    await mongoose.connect(process.env.MONGODB_URI);
    app.listen(3000);
    console.log("App is running on port 3000");
}
main();
