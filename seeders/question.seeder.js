/** @format */

// seeder for question  model
require("dotenv").config();
const Question = require("../models/question");
const mongoose = require("mongoose");

// db connection
const setup = async () => {
	await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

	const db = mongoose.connection;
	db.on("error", (error) => console.error(error));
	db.once("open", () => console.log("connected to Database "));
	// seed data
	await seedQuestion();
};

const question = [
	{
		questionText: "slowly is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: false },
			{ answerText: "adverb", isCorrect: true },
			{ answerText: "noun", isCorrect: false },
			{ answerText: "verb", isCorrect: false },
		],
	},
	{
		questionText: "ride is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: false },
			{ answerText: "adverb", isCorrect: false },
			{ answerText: "noun", isCorrect: false },
			{ answerText: "verb", isCorrect: true },
		],
	},
	{
		questionText: "bus is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: false },
			{ answerText: "adverb", isCorrect: false },
			{ answerText: "noun", isCorrect: true },
			{ answerText: "verb", isCorrect: false },
		],
	},
	{
		questionText: "commute is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: false },
			{ answerText: "adverb", isCorrect: false },
			{ answerText: "noun", isCorrect: false },
			{ answerText: "verb", isCorrect: true },
		],
	},
	{
		questionText: "emissions is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: false },
			{ answerText: "adverb", isCorrect: false },
			{ answerText: "noun", isCorrect: true },
			{ answerText: "verb", isCorrect: false },
		],
	},
	{
		questionText: "walk is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: false },
			{ answerText: "adverb", isCorrect: false },
			{ answerText: "noun", isCorrect: false },
			{ answerText: "verb", isCorrect: true },
		],
	},
	{
		questionText: "fast is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: true },
			{ answerText: "adverb", isCorrect: false },
			{ answerText: "noun", isCorrect: false },
			{ answerText: "verb", isCorrect: false },
		],
	},
	{
		questionText: "car is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: false },
			{ answerText: "adverb", isCorrect: false },
			{ answerText: "noun", isCorrect: true },
			{ answerText: "verb", isCorrect: false },
		],
	},
	{
		questionText: "crowded is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: true },
			{ answerText: "adverb", isCorrect: false },
			{ answerText: "noun", isCorrect: false },
			{ answerText: "verb", isCorrect: false },
		],
	},
	{
		questionText: "arrival is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: false },
			{ answerText: "adverb", isCorrect: false },
			{ answerText: "noun", isCorrect: true },
			{ answerText: "verb", isCorrect: false },
		],
	},
	{
		questionText: "emit is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: false },
			{ answerText: "adverb", isCorrect: false },
			{ answerText: "noun", isCorrect: false },
			{ answerText: "verb", isCorrect: true },
		],
	},
	{
		questionText: "independent is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: true },
			{ answerText: "adverb", isCorrect: false },
			{ answerText: "noun", isCorrect: false },
			{ answerText: "verb", isCorrect: false },
		],
	},
	{
		questionText: "convenient is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: true },
			{ answerText: "adverb", isCorrect: false },
			{ answerText: "noun", isCorrect: false },
			{ answerText: "verb", isCorrect: false },
		],
	},
	{
		questionText: "lane is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: false },
			{ answerText: "adverb", isCorrect: false },
			{ answerText: "noun", isCorrect: true },
			{ answerText: "verb", isCorrect: false },
		],
	},
	{
		questionText: "heavily is ?",
		answerOptions: [
			{ answerText: "adjective", isCorrect: false },
			{ answerText: "adverb", isCorrect: true },
			{ answerText: "noun", isCorrect: false },
			{ answerText: "verb", isCorrect: false },
		],
	},
];

const seedQuestion = async () => {
	try {
		await Question.deleteMany({});
		console.log("Question are deleted");
		await Question.insertMany(question);
		console.log("Question are added");
	} catch (error) {
		console.log(error);
	}
};

// run the setup
setup();

module.exports = seedQuestion;
