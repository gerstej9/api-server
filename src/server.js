'use strict';

//Importing dependencies
const express = require ('express');
const app = express();
const routeNotFound = require ('./error-handlers/404.js');
const internalServiceError = require ('./error-handlers/500.js');
const logger = require ('./middleware/logger.js');

//Link to routing paths
const foodRouter = require('./routes/food.js');
const clothesRouter = require('./routes/clothes.js');

//Utilized for handling json objects in express
app.use(express.json());

//Middleware
app.use(logger);
app.use(foodRouter);
app.use(clothesRouter);

//404 and 500 error handlers for route not found and internal service error
app.use(routeNotFound);
app.use(internalServiceError);


//Function to start server exported to index.js
function start(port){
  app.listen(port, () => console.log('App is listening on Port::', port));
}

module.exports = {
  app: app,
  start: start,
};