const express = require('express');
const productRoute = express.Router();
const middle  = require('../MiddleWare');

const products = [{id: 1, name: "cpu", price: 1000},

    {id: 2, name: "RAM", price: 2000},
    {id: 3, name: "Display", price: 1000},
    {id: 4, name: "mouse", price: 100}
 ]

productRoute.get("/getProducts", (req, res, next) => {
    res.send(products);
})

productRoute.get("/getroductByid/:id", middle, (req, res, next)=> {
    // const id = parseInt(req.params.id);
    // console.log(req.params.id);
    const id = req.parsedId;
    console.log("The new id is ",id);
    if(isNaN(id)){
        return res.status(500).send("The entereed input is invalid please enter correct input");
    }
    const filtered = products.find((user) => user.id === id);
    if(filtered){
        return res.send(filtered);
    }
    return res.status(404).send("The id not found please enter correct ID");
})

productRoute.get('/byqueryParam', (req, res, next) => {
    const id = parseInt(req.query.id);
    const name = req.query.name;
    console.log(id, name);
    const result = products.filter((user) => user.id === id && user.name === name);
    res.send(result);
})

productRoute.post("/postProduct", (req, res, next) => {
    console.log(req.body);
    res.send("product added into cart");
})



module.exports = productRoute;