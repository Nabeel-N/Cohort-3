const express = require ("express");
const { UserModel , TodoModel } = require("./db");
const jwt = require ("jsonwebtoken");
const mongoose = require("mongoose")
const JWT_SECRET = " asdjfsfd4132";

mongoose.connect("mongodb+srv://nabeel123:CMMG53HEnlUp2hs1@cluster0.ieqgqev.mongodb.net/NB-todo")

const  app = express();
 app.use(express.json());

 //SIGNUP

app.post("/signup",async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email : email,
        password: password,
        name : name

    })

    res.json({
        message :"you are logged In"
    })
})



//SIGNIN
 
 app.post("/signin", async function( req, res){
    const email = req.body.email;
    const password = req.body.password;
    
    const user = await  UserModel.findOne({
        email : email,
        password : password
    })

    
    

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        } , JWT_SECRET);
        
        res.json({
            token : token

        });

    }
    else{
        res.status(403).json({
            message: "Incorret credentials"
        })
    }
 });





 app.post("/todo", auth , async function (req, res){
    const title = req.body.title;
    const done = req.body.done;
    const userId = req.body.userId;

    const TodoCreate = await TodoModel.create({
        title :title,
        done : done,
        userId : userId
    

    })

    res.status(201).json({
        message: "Todo Created Successfully",
        todo: TodoCreate  // You can also return the created todo if needed
    });
    
 })


 app.get("/todos",auth, async function (req, res){
    const userId = req.body.userId;

    const todofind = await TodoModel.findOne({
        userId 
    })
    if(todofind){

        res.json({
            message:"found ONE"
        })
    } else res.status(404).json({
        message:"Todo not Found"
    })

 })

 function auth (req, res, next){
    const token = req.headers.token
    const decodedData = jwt.verify(token , JWT_SECRET);

    if(decodedData) {
        req.userId = decodedData.id;
        next();

    }else{
        res.status(403).json({
            message:"Incorrect Credentials"
        })
    }
 }
 
 app.listen(3000);
 console.log("port is running successfully");