const express = require('express');
const express_ws = require('express-ws');
const redis = require("redis");
const cors = require('cors');
const expressWs = express_ws(express());
const app = expressWs.app;

const port = 8004;

app.use(cors());

app.use(express.static('public'));

const aWss = expressWs.getWss('/');

(async () => {
    const client = redis.createClient();
    await client.connect();

    const subscriber = client.duplicate();
    await subscriber.connect();
    
    await subscriber.subscribe("notification", (message, channel) => {
        aWss.clients.forEach(function (client) {
            // client.send(`Message from channel '${channel}', it says: '${message}'`);
            client.send("Notification sent from port " + port);
        });
    }, true);
})();

app.ws('/ws', function(ws, req) {
    console.log("Received a request on port " + port);
});

app.listen(port, (err) => {
	console.log("Listening on port " + port);
});