const express = require("express");
const redis = require("redis");
const cors = require('cors');

const port = 8005;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const publisher = redis.createClient({
	port      : 6379,              
	host      : 'rdb',
});

publisher.connect().then(() => {
	const publishOnChannel = async(channel, message) => {
		await publisher.publish(channel, message);
	}
	
	app.get('/', (req, res) => {
		publishOnChannel("notification", "Notification sent").then(
			() => res.status(200).json({'Response': 'Success'})
		);
	});
});

app.listen(port, (err) => {
	console.log("Listening on port " + port);
});








