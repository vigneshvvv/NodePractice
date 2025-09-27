// const sample = "userSample";
// let sample2 = "user2sample";

// const { HttpStatusCode } = require("axios");
// const { clear } = require("console");

// function samplefnc(){
//     console.log("function working");
// }
// console.log(sample2);
// samplefnc();

// const arr = ["This", "working"];
// const arr2 = [...arr]
// arr2.push("sample");
// console.log(arr);
// console.log(arr2);

const httpServer = require('http');
const fs = require('fs');

function serverimpl(req ,res){

    console.log("Server is working")
   process.exit();
}
const server = httpServer.createServer((req, res) => {
    console.log(req.url);
    const body = [];
    req.on('data', (chunk) => {
        // console.log(chunk);
        body.push(chunk);
    })

    req.on('end', () => {
        const result = Buffer.concat(body).toString();
        const re = JSON.parse(result);
        fs.writeFileSync('sample.txt', JSON.stringify(re));
        console.log(re);
    })
    console.log("server is Woring fine");
    // res.writable("Sample is working");
    res.write("sample is working");
    res.write("fine");
    res.end();
    // process.exit();
});
server.listen(8080);
