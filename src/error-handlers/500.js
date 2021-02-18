'use strict';

const logger = require ('../middleware/logger.js');

//Express middleware for handling interal service errors

function statusInternalError(err, request, response, next){
  logger();
  const error = err.message ? err.message : err;

  const errorObject = {
    status: 500,
    message: error,
  }
  response.status(errorObject.status).json(errorObject);
}

module.exports = statusInternalError;