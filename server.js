const express = require('express');
const mongoose = require('mongoose');
const socketIO = require('socket.io')(this.app);


// Define a Server class to represent the server-side logic of the application
class Server {
  // Constructor for the Server class
  constructor() {
    // Create an express app
    this.app = express();

    // Initialize empty arrays for routes, models, and controllers
    this.routes = [];
    this.models = [];
    this.controllers = [];
  }

  // Define a method to configure the server
  configure(config) {
    // Set the server port
    this.app.set('port', config.port);
    // Set the URL for the MongoDB database
    this.app.set('mongoUrl', config.mongoUrl);
  }

  // Define a method to add routes to the server
  addRoutes(routes) {
    // Add the routes to the routes array
    this.routes = this.routes.concat(routes);
  }

  // Define a method to add models to the server
  addModels(models) {
    // Add the models to the models array
    this.models = this.models.concat(models);
  }

  // Define a method to add controllers to the server
  addControllers(controllers) {
    // Add the controllers to the controllers array
    this.controllers = this.controllers.concat(controllers);
  }

  // Define a method to add middleware to the server
  addMiddleware(middleware) {
    this.app.use(middleware);
  }

  // Define a method to start the server
  start() {
    // Return a promise that is resolved when the server starts
    return new Promise((resolve, reject) => {
      // Connect to the database
      mongoose.connect(this.app.get('mongoUrl'), { useNewUrlParser: true })
        .then(() => {
          console.log('Successfully connected to the database');

          // Initialize the routes, models, and controllers
          this.routes.forEach(route => route.init(this.app));
          this.models.forEach(model => model.init());
          this.controllers.forEach(controller => controller.init());

          // Start the server
          this.app.listen(this.app.get('port'), () => {
            console.log(`Server listening on port ${this.app.get('port')}`);
            // Start the socket.io server and listen for connections
          socketIO.listen(this.app.get('port'), () => {
            console.log(`Socket.io listening on port ${this.app.get('port')}`);
          })
          resolve();
          });
        })
        .catch(err => {
          console.error('Error connecting to the database');
          reject(err);
        });
    });
  }
}

// Export the Server class
module.exports = Server;
