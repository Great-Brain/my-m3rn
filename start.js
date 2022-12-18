//This code starts the express app and listens for incoming HTTP requests on the specified port. 
//It also starts the socket.io server and listens for incoming connections on the same port. 
//Finally, it includes error handling to handle the case where the port is already in use.

const Server = require('./serverconfig');
const server = new Server();

server.configure({
    port: process.env.PORT || 8000
    });
server.start()
    .then(() => {
        console.log('Server started');
    })
    .catch((err) => {
        console.error('Error starting server', err);
    });