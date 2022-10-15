/** @format */

// seeder for question  model
require("dotenv").config();
const Rank = require("../models/score");
const mongoose = require("mongoose");

// db connection
const setup = async () => {
	await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

	const db = mongoose.connection;
	db.on("error", (error) => console.error(error));
	db.once("open", () => console.log("connected to Database "));
	// seed data
	await seedScore();
};

const rank = [
	{ score: 20 },
	{ score: 90 },
	{ score: 100 },
	{ score: 50 },
	{ score: 10 },
	{ score: 50 },
	{ score: 60 },
	{ score: 0 },
	{ score: 60 },
	{ score: 10 },
	{ score: 90 },
	{ score: 30 },
	{ score: 100 },
	{ score: 30 },
	{ score: 20 },
	{ score: 90 },
	{ score: 40 },
	{ score: 20 },
	{ score: 10 },
	{ score: 60 },
	{ score: 50 },
	{ score: 100 },
	{ score: 50 },
	{ score: 80 },
	{ score: 50 },
	{ score: 80 },
	{ score: 60 },
	{ score: 80 },
	{ score: 10 },
	{ score: 40 },
];

const seedScore = async () => {
	try {
		await Rank.deleteMany({});
		console.log("Rank are deleted");
		await Rank.insertMany(rank);
		console.log("Rank are added");
	} catch (error) {
		console.log(error);
	}
};

// run the setup
setup();

module.exports = seedScore;
