/** @format */

require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const QueststionsRouter = require("./routes/questions");
const StudentRankRouter = require("./routes/StudentRankRouter");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to Database "));

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
app.use("/questions", QueststionsRouter);
app.use("/rank", StudentRankRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server started"));
