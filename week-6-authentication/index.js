const express = require('express');
const crypto = require('crypto');
const app = express();
app.use(express.json());

const users = [];



app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.json({
        message: "User created successfully"
    })
})

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    
    let foundUser = null;
    for (i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i];
        }
    }
    if (foundUser) {
        const token = generateToken();
        foundUser.token = token;
        res.json({
            token: token
        })
    }
    else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
})

app.listen(3000);
console.log("port running on 3000")