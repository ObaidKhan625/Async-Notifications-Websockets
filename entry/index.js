const express = require("express");
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
	res.status(200).json({'Response': 'Success'});
});

app.listen(port, (err) => {
	console.log("Listening on port " + port);
});