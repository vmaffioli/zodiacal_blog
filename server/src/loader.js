const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index-routes');

// App
const app = express();

// Load routes
app.use('/', indexRoutes);

//profile 
app.use('/',express.static(path.join(__dirname, '../../client/build/')));

//exports
module.exports = app;