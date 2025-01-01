const bcrypt = require("bcrypt")
const { z } = require("zod");
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nabeel123:CMMG53HEnlUp2hs1@cluster0.ieqgqev.mongodb.net/Todos-app-week-7-2")

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
  
    const requireBody = z.object({
        email:z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password:z.string().min(3).max(30)
    });
    const parsedDataWithSucess = requireBody.safeParse(req.body)

    if(!parsedDataWithSucess.success){
        res.json({
            message :  "incorrect format",
            error : parsedDataWithSucess.error
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;


    const hashedpassword = await bcrypt.hash(password , 5) 

    await UserModel.create({
        email: email,
        password: hashedpassword,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    })
});





app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
    });

    if(!response){
        res.status(403).json({
            message : "User does not Exists"
        })
    }
    const passwordMatch = await bcrypt.compare(password, response.password);

    if (passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});





app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});




app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    // Validate if userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({
            message: "Invalid userId format"
        });
    }

    try {
        // Query to find todos associated with the userId
        const todos = await TodoModel.find({ userId });

        // If no todos are found, return a message
        if (!todos || todos.length === 0) {
            return res.status(404).json({
                message: "No todos found for this user"
            });
        }

        // Return the todos if found
        res.json({ todos });
    } catch (error) {
        // Handle any errors that might occur
        res.status(500).json({
            message: "An error occurred while fetching todos",
            error: error.message
        });
    }
});


app.listen(3000);
console.log("Port is running on 3000")