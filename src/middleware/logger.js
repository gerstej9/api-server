'use strict';

function logger(request, response, next){
  console.log(`request method ${request.method} at path ${request.url}`);
  next();
}

module.exports = logger;