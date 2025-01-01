const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
// brcypt, zod, jsonwebtoken
const  { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../Routes/middleware/admin");
const course = require("./course");


adminRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body; // TODO: adding zod validation
    // TODO: hash the password so plaintext pw is not stored in the DB

    // TODO: Put inside a try catch block
    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName, 
        lastName: lastName
    })
    
    res.json({
        message: "Signup succeeded"
    })
})

adminRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    // TODO: ideally password should be hashed, and hence you cant compare the user provided password and the database password
    const admin = await adminModel.findOne({
        email: email,
        password: password
    });


        // Do cookie logic
        res.cookie('userId', admin._id,  {httpOnly:true});
        res.json({message:"Signin succeeded"})

    })
    
adminRouter.post("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;

    // creating a web3 saas in 6 hours
    const course = await courseModel.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price, 
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
})

adminRouter.put("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    // creating a web3 saas in 6 hours
    const course = await courseModel.updateOne({
        _id: courseId, 
        creatorId: adminId 
    }, {
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price
    })

    res.json({
        message: "Course updated",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk", adminMiddleware, async function(req, res) {
    const adminId = req.userId;
    console.log("Admin ID:", adminId);
  
    try {
      // First, let's check if we can fetch any courses at all
      const allCourses = await courseModel.find({});
      console.log("All courses in DB:", allCourses);
  
      // Now let's fetch courses for this specific admin
      const adminCourses = await courseModel.find({ creatorId: adminId });
      console.log("Courses for this admin:", adminCourses);
  
      res.json({
        message: "Courses retrieved",
        adminId: adminId,
        totalCoursesInDB: allCourses.length,
        coursesForThisAdmin: adminCourses
      });
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Error retrieving courses", error: error.message });
    }
  });

module.exports = {
    adminRouter: adminRouter
}