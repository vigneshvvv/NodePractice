const http = require('http');
const express = require('express');
const bodyparser = require('body-parser');

const server = express();

// server.use((req, res, next) => {
//     console.log('express works');
//     next();
// }
// )

// server.use((req, res, next) => {
//     console.log('express works 2');
//     next();
// }
// )

// server.use((req,res, next) => {
//     console.log('express works 3');
//     res.send('This works');
// }
// )
// const news = http.createServer(server);
// news.listen(8080);

server.use(bodyparser.urlencoded());  //this is to tell that handle form data
server.use(bodyparser.json());

// server.use('/second', (req,res, next) => {
//     console.log("Second middleware");
//     console.log(JSON.stringify(req.body));
//     res.send("second was working fine");
// })

server.post('/second', (req,res, next) => {
    console.log("Second middleware");
    console.log(JSON.stringify(req.body));
    res.send("second was working fine");
})

// server.use( (req,res, next) => {
//     console.log("First middleware");
//     res.send("it was working fine");
// })



server.listen(8080);
