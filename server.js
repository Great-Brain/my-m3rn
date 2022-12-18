const express = require('express');
const mongoose = require('mongoose');

// Define a Server class to represent the server-side logic of the application
class Server {
  // Constructor for the Server class
  constructor() {
    // Create an express app
    this.app = express();
    //create a socket instance of the app as well
    const socket = require('./socket.io')(this.app);

    // Initialize empty arrays for routes, models, and controllers
    this.routes = [];
    this.models = [];
    this.controllers = [];    
    this.socket = socket;
  }

  // Define a method to configure the server
  configure(config) {
    // Set the server port
    this.app.set('port', config.port);
    // Set the connection for the mongodb db
    this.app.set('mongoDb', config.mongoDb);
  }

  // Define a method to add routes to the server
  addRoutes(path, routes) {
    // Add the routes to the routes array
    this.routes = this.routes.concat(routes);
    this.path = path;
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
      try{
        // Initialize the routes, models, and controllers
        this.routes.forEach(route => this.app.use(this.path, route));
        this.models.forEach(model => model.init());
        this.controllers.forEach(controller => controller.init());

        // Start the server
        this.app.listen(this.app.get('port'), () => {
          console.log(`Server listening on port ${this.app.get('port')}`);
        })
        // Start socket.io and listen for connections to our app-server
        this.socket.http.listen(this.app, () => {
          console.log(`Socket.io listening on port ${this.app.get('port')}`);
        })
      } catch(err) {
      console.error('Error creating server');
      reject(err);
      }
    });
  }
}

// Export the Server class
module.exports = Server;
