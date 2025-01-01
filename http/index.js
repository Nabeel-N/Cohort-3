const express = require("express");
const app = express();


let requestCount = 0;

function requeastIncreaser(req, res , next){

    requestCount = requestCount + 1;
    console.log("Total number of requests =" + requestCount)
    if(requestCount <= 0){
        res.json({
            message : "I ended the request early"
        })
    }else{
        next()
    }

}

function requestHandler(req, res){
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        answer: a + b
    
    })
}
app.get("/sum", requeastIncreaser, requestHandler);


app.get("/multiply" ,function(req, res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b);

    res.json({
        answer: a*b
    })
})

app.listen(3000);

