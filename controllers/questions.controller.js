/** @format */

// getQuestions : get all questions from the database and return 10 objects randomly to the client

const Question = require("../models/question");

const getQuestions = async (req, res) => {
	// get all questions from the database
	const questions = await Question.find();
	// return 10 objects randomly to the client
	res.status(200).json(questions.sort(() => 0.5 - Math.random()).slice(0, 10));
};

module.exports = {
	getQuestions,
};
