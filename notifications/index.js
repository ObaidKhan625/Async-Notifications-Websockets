const express = require('express');
const express_ws = require('express-ws');
const expressWs = express_ws(express());
const app = expressWs.app;
const cors = require('cors');
const port = 8002;

app.use(cors());

app.use(express.static('public'));

const aWss = expressWs.getWss('/');

app.get('/', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // console.log(randomNumber);
    res.status(200).json({ "random number": `${randomNumber}` });
});

app.get('/ws', (req, res) => {
    aWss.clients.forEach(function (client) {
        client.send("Someone visited the REST endpoint");
    });
	res.status(200).json({'Response': 'Success'});
});

app.ws('/ws', function(ws, req) {
});

app.listen(port, (err) => {
	console.log("Listening on port " + port);
});


