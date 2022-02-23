import io from 'socket.io-client';
import eventEmitter from './eventEmitter';
import commonConfig from './commonConfig';

let notificationService = {
  connectSocketServer: (socketURL = commonConfig.socketURL) => {
    let socket = io(socketURL);
    if (!socket) {
      console.log('CONNECTION ALREADY ESTABLISHED');
    } else {
      socket.on('connect', function () {
        console.log('CONNECTION ESTABLISHED');
        // this.emit('user_joined', 44)
      });
      socket.on('disconnect', function () {
        console.log('CONNECTION LOST');
        //this.socket = io.connect(this.socket_url);
      });

      socket.on('allCoins', (data) => {
        console.log('allCoins response', data);
        eventEmitter.emit('allCoinsEE', data);
      });

      eventEmitter.on('allCoinsEE', (data) => {
        // console.log(eventEmitter);
        socket.emit('allCoins');
      });
    }
  },
};

export default notificationService;
