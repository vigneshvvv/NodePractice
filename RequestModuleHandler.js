
 const body = [];
const moduleHandler = (req, res) => {
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

const sample = "Sample text working fine without error testing also done";

// module.exports = {exe: moduleHandler, text: sample}
 
exports.handler = moduleHandler;
exports.text = sample;