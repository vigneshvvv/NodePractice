const { Console } = require('console');
const httpf = require('http');
const requestHandle = require('./RequestModuleHandler');

 const body = [];

function reqvalue(req, res) {      
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
      
    })

    req.on('end', () => {
        const resultData = Buffer.concat(body).toString();
        const resultdataoutput = JSON.parse(resultData);
        
        console.log(resultdataoutput);
    })
      res.write("Welcome");
      res.end();
}

const text = requestHandle.text;
console.log(text);

const server = httpf.createServer(reqvalue);
server.listen(8081);

