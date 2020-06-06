import socketio from 'socket.io-client';

interface Dev {
  _id: string;
  avatar_url: string;
  bio?: string;
  github_username: string;
  location: {
    coordinates: [string, string];
  };
  name: string;
  techs: [string];
}

const socket = socketio('http://10.0.2.2:3333', {
  autoConnect: false,
});

function subscribeToNewDevs(subcribeFunction: (dev: Dev) => void): void {
  socket.on('newDev', subcribeFunction);
}

function subscribeToUpdateDev(subcribeFunction: (dev: Dev) => void): void {
  socket.on('upDev', subcribeFunction);
}

function subscribeToDeleteDev(subcribeFunction: (id: string) => void): void {
  socket.on('removeDev', subcribeFunction);
}

function connect(latitude: number, longitude: number, techs: string): void {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };
  socket.connect();
}

function disconnect(): void {
  if (socket.connected) {
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subscribeToNewDevs,
  subscribeToUpdateDev,
  subscribeToDeleteDev,
};
