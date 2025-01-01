const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI); // Use environment variable for connection string    

const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;
    
const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  price: Number,
  creatorId: {  // Field to store the admin's ObjectId
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',  // Reference to the Admin model
    required: true
  }
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};