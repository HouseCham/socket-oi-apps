const Server = require('./models/server');

const server = new Server();
server.execute();

// io.on('connection', ( socket ) => { 
//     socket.emit('welcome-message', {
//         message: 'Welcome to the chat!',
//         date: new Date()
//     });

//     socket.on('chat-message-client', (data) => {
//         console.log(data);
//         io.emit('chat-message-server', data);
//     });
//  });

// server.listen(3000, () => {
//     console.log('Server running on port: 3000');
// });