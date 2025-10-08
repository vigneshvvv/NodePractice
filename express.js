const express = require('express');
const http = require('http');
const server = express();
const routes = require('./Router/MainRoute');
const app = require('body-parser');
const productroute = require('./Router/ProductRoutes');
server.use(app.json());
server.use(app.urlencoded());
server.use(routes);
server.use("/admin/api", productroute);


server.use((req, res, next) => {
    res.status(404).send("404 Page Not found Please Enter correct url");
})



server.listen(8080);