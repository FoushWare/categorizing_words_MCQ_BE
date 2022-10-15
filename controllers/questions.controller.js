/** @format */

// getQuestions : get all questions from the database and return 10 objects randomly to the client

const Question = require("../models/question");
const Rank = require("../models/score");

const getQuestions = async (req, res) => {
	// get all questions from the database
	const questions = await Question.find();
	// return 10 objects randomly to the client
	res.status(200).json(questions.sort(() => 0.5 - Math.random()).slice(0, 10));
};

const getStudentRank = async (req, res) => {
	// get all the scores from the database
	const scores = await Rank.find();
	// get the score of the student from the request body
	const studentScore = req.body.score;
	console.log("-----------", studentScore);
	// get count of all the scores that less than the student score
	const scoresBlowStudentScore = scores.filter(
		(score) => score.score < studentScore
	).length;
	const StudentRank = (scoresBlowStudentScore / scores.length) * 100;
	// round student rank to the nearest hundredth
	const roundedStudentRank = Math.round(StudentRank * 100) / 100;
	// return the rank of the student to the client so the client can display it res.data.rank
	res.status(200).json({ rank: roundedStudentRank });
};

module.exports = {
	getQuestions,
	getStudentRank,
};
