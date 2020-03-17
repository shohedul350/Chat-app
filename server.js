const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./routes/route');

const PORT = process.env.PORT || 5000;


const app = express();


const server = http.createServer(app);
const io = socketio(server);
io.on('connection', (socket) => {
  console.log('we have a new connection');
  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);
    const error = true;
    if (error) {
      callback({ error: 'error' });
    }
  });
  socket.on('disconnect', () => {
    console.log('user had left');
  });
});

// route
app.use(router);

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
