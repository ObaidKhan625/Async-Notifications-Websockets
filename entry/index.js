const express = require("express");
const app = express();
const cors = require('cors');
const port = 8001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.status(200).json({ "random number": `${randomNumber}` });
});

app.listen(port, (err) => {
	console.log("Listening on port " + port);
});