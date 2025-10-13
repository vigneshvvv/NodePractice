const express = require('express');

const getAndParseId = (req, res, next) => {
    const id = parseInt(req.params.id);
    req.parsedId = id;
    next();
}

module.exports = getAndParseId;