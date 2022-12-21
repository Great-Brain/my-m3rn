//calls a custom server
const server = require('./serverconfig');

// Start the server
server.start()
  .then(() => {
    console.log('Server started');
  })
  .catch((err) => {
    console.error('Error starting server', err);
  });