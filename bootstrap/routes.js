const express = require('express');

function Routes(app) {

  app.use(function (req, res, next) {

    // Server that will be given accessibility to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request Methods
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    // Request Headers
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.setHeader('Content-Type', 'application/json');

    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });
  
  app.use('/api/v1', require('../routes'));
}

module.exports = Routes;
