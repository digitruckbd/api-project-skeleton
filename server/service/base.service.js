const Models = require('./../middleware/mongoose.models');

// This class contains all the common service functions
// of other services which extends this BaseService
class BaseService {
  constructor(modelName) {
    this.modelName = modelName;
  }

  get() {
    return new Promise((resolve, reject) => {
      Models[this.modelName]
        .find()
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        })
    });
  }

  create(obj) {
    return new Promise((resolve, reject) => {
      Models[this.modelName]
        .create(obj)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        })
    });
  }
}

module.exports = BaseService;
