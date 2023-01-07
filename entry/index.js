const express = require("express");
const fetch = require('node-fetch');
const app = express();
const cors = require('cors');
const port = 8001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
	const url = "http://localhost:80/ws";
	fetch(url)
	.then(response => res.status(200).json({'Response': 'Success'}))
	.catch(err => res.status(400).send("Bad Request"));
});

app.listen(port, (err) => {
	console.log("Listening on port " + port);
});