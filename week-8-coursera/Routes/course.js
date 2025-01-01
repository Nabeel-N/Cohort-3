const { Router} = require("express");
const { userMiddleware } = require("./middleware/user");
const {purchaseModel} = require("../db");
const {courseModel }= require("../db")
const courseRouter = Router();

courseRouter.post("/purchase",userMiddleware, async function ( req, res){
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:"signup endpoint"
    })

 } );


 courseRouter.get("/preview", async function (req, res) {
    try {
        // Await the result of the query to get the courses
        const courses = await courseModel.find({});

        // Send the courses in the response
        res.json({
            courses
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching courses" });
    }
});



        
module.exports = {
    courseRouter:courseRouter
    }
   