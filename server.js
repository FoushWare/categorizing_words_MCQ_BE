/** @format */

require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to Database "));

// var allowCrossDomain = function (req, res, next) {
// 	res.header('Access-Control-Allow-Origin', "*");
// 	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// 	res.header('Access-Control-Allow-Headers', 'Content-Type');
// 	next();
// };

// app.use(allowCrossDomain);
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});
app.use(express.json());
app.use(morgan("tiny"));
//set up routes
const QueststionsRouter = require("./routes/questions");
app.use("/questions", QueststionsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server started"));
