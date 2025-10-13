const express = require('express');

const obj = [{id: 1, name:"vignesh", location: "chennai"},
{id: 2, name:"kumar", location: "Delhi"},
{id: 3, name:"Murugan", location: "Madurai"}
]

const gettingIndex = (req, res, next) => {
  const decoded = Buffer.from(req.params.id, "base64").toString("utf-8");
   console.log("decoded", decoded);
     const id = parseInt(decoded);
    if(isNaN(id)){
        return res.status(500).send("Bad Request");
    }
    const index = obj.findIndex((e) => e.id === id);
    req.indexvalue = index;
      if(index === -1){
        return res.status(404).send("The data found");
    }

    const {body} = req;
    obj[index] = {...obj[index], ...body};
    req.obj = obj;
    next();
}

module.exports = gettingIndex;