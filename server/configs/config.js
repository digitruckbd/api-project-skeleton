// Here Joi validation should be done for the enviroment variables
// Then the variables should be exported.

module.exports = {
  port: 3000,
  //Connection String pattern mongodb://localhost:portNumber
  // Database name should be appended later on
  mongoConnectionString: "mongodb://localhost:27017/"
};
