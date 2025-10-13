const express = require('express');
const validator = require('../Utils/ValidationSchema');
const {validationResult, matchedData, checkSchema} = require('express-validator');
const userValidation = require('../Utils/UserSchema');
// import { validationResult, matchedData, checkSchema } from 'express-validator';

const route = express.Router();
const middleWareFunction = require('../ServiceLayer');

const obj = [{id: 1, name:"vignesh", location: "chennai"},
{id: 2, name:"kumar", location: "Delhi"},
{id: 3, name:"Murugan", location: "Madurai"}
]

route.get("/MainPage/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(500).send("The input you have given is invalid..please enter correct input");
    }
    console.log(id);
    const result = obj.find((e) => e.id === id);
    if(result){
          console.log(result);
     return res.send(result);
    }
    return res.status(404).send("The id doesn't Exisit");
})

route.get("/getbyQueryParam", (req, res, next) => {
    // console.log(parseInt(req.params.id));
    const id = parseInt(req.query.id);
    // const {id , name} = req.query;
    // console.log(req.query);
    const name = req.query.name;
    if(id && name){
   const filteredOut= obj.filter((e) => e.id === id && e.name === name);
   if(filteredOut){
    console.log(filteredOut);
    return res.send(filteredOut);
    }

    return res.status(404).send("Data not found");
    }
    return res.status(500).send("Invalid Input");
})

route.post("/postMainContent", checkSchema(validator), (req, res, next) => {
    const result = validationResult(req);
    console.log(result);
    if(!result.isEmpty()){
         return res.status(400).send({error:result.array()});
    }
    const body = matchedData(req);
    console.log("The final output", body);
    console.log(req['express-validator#contexts']);
    res.send("Values inserted succesfully");    
})

route.post("/insertUserData", checkSchema(userValidation),(req, res, next) => {
    console.log(req['express-validator#contexts']);
    const output = validationResult(req);
    if(!output.isEmpty()){
        return res.status(500).send({error: output.array()});
    }
    const sample = matchedData(req);
    console.log("The result output was", sample);
    res.send("The user inserted successfully");
})

route.patch("/api/user/:id", middleWareFunction, (req, res) => {
    const index = req.indexvalue;
    const newobj = req.obj;
    console.log(newobj);
    res.send("working");
})


route.patch("/api/userSample/:id", middleWareFunction, (req, res) => {
//    const decodedId = Buffer.from(encodedId, "base64").toString("utf-8");
    const index = req.indexvalue;
    const newobj = req.obj;
    console.log(newobj);
    res.send("working");
})

module.exports = route;