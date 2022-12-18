const app = require('./server');
const socketIO = require('./socket.io')(app);

const port = app.get('port');

let server = socketIO.http.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

server.on('error', (err) => {
    if (err.errno === 'EACCES') {
        console.error(`Port ${port} already in use.\nExiting...`);
        process.exit(1);
    }
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});
