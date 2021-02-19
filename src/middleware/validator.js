'use strict';

//Middleware to examine if req.params provides a id

function checkID(request, response, next){
  if(!Number(request.params.id)){
    next('no ID available')
  }
  next();
};

module.exports = checkID;