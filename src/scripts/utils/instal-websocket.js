import notifWebsocket from './notif-websocket';

let socket = null;

const InstalWebSocket = {
  init(url) {
    socket = new WebSocket(url);
    console.log('ws connected to => ', socket.url);

    socket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    console.log('websocket onmessage handler => ', message);

    const detailData = JSON.parse(message.data);

    notifWebsocket.kirimNotif({
      title: detailData.name,
      options: {
        body: detailData.review,
        icon: 'icons/192x192.png',
        image: 'images/logo-resto.png',
        vibrate: [200, 100, 200]
      }
    });
  }
};

const kirimDataKeWebsocket = (detailData) => {
  const data = JSON.stringify(detailData);

  socket.send(data);
};

export { InstalWebSocket, kirimDataKeWebsocket };
