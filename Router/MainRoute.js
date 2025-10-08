const express = require('express');

const route = express.Router();

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

route.post("/postMainContent", (req, res, next) => {
    console.log(req.body);
    res.send("Values inserted succesfully");
})

module.exports = route;