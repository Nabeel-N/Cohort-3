const fs = require('fs');

function Fileread(resolve){
    setTimeout(resolve, 10000)
}


function setTimeoutPromisified(){
    return new Promise(Fileread)
}
const p = setTimeoutPromisified();

function callback(){
    console.log("resolved output")
}

p.then(callback)